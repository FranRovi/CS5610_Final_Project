import React, { useState, useEffect } from 'react';
import BookCard from './book-card';
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAllBooks } from '../services/books/books-service';
import { useSelector } from 'react-redux';


const BookList = () => {
    const { currentUser } = useSelector(state => state.users);
    let initialSearch;
    if (currentUser) {
        initialSearch = currentUser.favoriteGenre
    } else {
        initialSearch = '';
    }
    const [search, setSearch] = useState(initialSearch);
    console.log(initialSearch);
    console.log(currentUser);
    const navigate = useNavigate();
    const { searchTerm } = useParams();
    console.log(searchTerm);
    if (searchTerm !== undefined) {
        setSearch(searchTerm);
    }
    const [results, setResults] = useState([]);
    console.log(search);

    const fetchAllBook = async (query) => {
        const response = await getAllBooks(query);
        console.log(response);
        setResults(response.items);
        //navigate(`/books/search/${searchTerm}`);
    };
    useEffect(() => {
        fetchAllBook(search);
    }, [searchTerm]);
    //}, []);
    
    const searchClickHandler = async () => {
        // implement search
        console.log('clicking search button');
        setSearch(search);
        fetchAllBook(search);
    }

    return(
        <>
            <div>
                {currentUser && (
                    <div>
                        <h2>{currentUser.username}</h2>
                        <h2>{currentUser.password}</h2>
                    </div>
                )}
            </div>
            <div>
                <div className="d-flex justify-content-around">
                    <input className='form-control w-75'
                    type='text'
                    value={search}
                    onChange={event=>setSearch(event.target.value)} />
                    <div className=''>
                        <button className='btn btn-primary' onClick={searchClickHandler}>Search</button> 
                    </div>
                </div>
            </div>
            <h2>Books</h2>
            <div className='container row'>
                <ul className='list-unstyled d-flex flex-wrap'>
                {
                    results.map(result => {
                        return (<BookCard {...result} className="justify-content-around" />)
                        })
                } 
                </ul>



                
                {/* { response &&
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Book cover"/>
                    <div className="card-body">
                        <p className="card-text">{response.items[0].volumeInfo.title}</p>
                    </div>
                </div>
                } */}
                {/* <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Book cover"/>
                    <div className="card-body">
                        <p className="card-text">{response.items[1].volumeInfo.title}</p>
                    </div>
                </div> */}
            </div>
        </>
    )

}

export default BookList