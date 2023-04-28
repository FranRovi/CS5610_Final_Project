import React, { useState, useEffect } from 'react';
import BookCard from './book-card';
import { useParams, useNavigate } from "react-router-dom";
import { getAllBooks } from '../services/books/books-service';
import { useSelector } from 'react-redux';


const BookList = () => {
    
    // Try to implement URL ENCODING BUT GOT INFINITE LOOP RE-RENDER
    // const { currentUser } = useSelector(state => state.users);
    // const { searchTerm } = useParams();
    // const [search, setSearch] = useState();
    // let initialSearch;
    // if (currentUser) {
    //     initialSearch = currentUser.favoriteGenre;
    // } else {
    //     if (searchTerm !== undefined) {
    //         initialSearch = searchTerm;
    //     }
    // }
    // setSearch(initialSearch);

    // const [results, setResults] = useState([]);
    // const navigate = useNavigate();
    
    
    // NO URL ENCONDING BUT WORKS
    
    const { currentUser } = useSelector(state=>state.users);
    const { searchTerm } = useParams();
    let initialSearch;
    if (currentUser) {
        initialSearch = currentUser.favoriteGenre;
    } else {
        initialSearch = 'favorites';
    }
    const [search, setSearch] = useState(initialSearch);
    // if (searchTerm !== undefined) {
    //     setSearch(searchTerm);
    // }
    const [results, setResults] = useState([]);

    const fetchAllBook = async (query) => {
        const response = await getAllBooks(query);
        // console.log(response);
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
            <div className='mt-3'>
                {currentUser && (
                    <div>
                        <h2>{currentUser.username}</h2>
                        <h2>{currentUser.password}</h2>
                    </div>
                )}
            </div>
            <div>
                <div className="d-flex justify-content-around">
                    <label>Searh for your favorites books or authors</label>
                    <input className='form-control w-50'
                    type='text'
                    placeholder='Search for your favorite books or authors'
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
                        }
                    )
                } 
                </ul>
            </div>
        </>
    )

}

export default BookList