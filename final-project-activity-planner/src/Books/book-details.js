import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLikesAuthor, userLikesNovel  } from '../services/likes/likes-service';

const BookDetail = (props) => {
    console.log(props.book);
    console.log(props.id);
    // hacerlo usando sessions
    const { currentUser } = useSelector(state => state.users);
    //const { id } = useParams();
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate('/books');
    }

    const likeAuthor = async () => {
        const response = await userLikesAuthor(currentUser._id, props.book.authors[0]);
        console.log(response);
        //navigate('/books');
    }

    const likeNovel = async () => {
        const response = await userLikesNovel(currentUser._id, props.id);
        console.log(response);
        //navigate('/books');
    }

    return(
        <>
            <h1>Book Details</h1>
            { props.book && <div className='row'>
                <div className="container col-7">
                    <div className='d-flex align-items-center justify-content-between'>
                        <h6 className="">{props.book.authors}</h6>
                        <h5 className="">{props.book.title}</h5>
                    </div>
                    <hr/>   
                    <p>{props.book.description}</p>
                    <div className='d-flex justify-content-around'>
                        <span>Publisher: {props.book.publisher}</span>
                        <span className="">Release Date: {props.book.publishedDate}</span>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <span>Ratings Count: {props.book.ratingsCount}</span>
                        <span className="">Page count: {props.book.pageCount}</span>
                    </div>
                    <div>
                        { currentUser && 
                            <div className="">
                                <button onClick={likeAuthor} className='btn btn-primary m-3'>Like Author</button>
                                <button className='btn btn-danger m-3'>Unlike Author</button>
                                <button onClick={likeNovel} className='btn btn-primary m-3'>Like Novel</button>
                                <button className='btn btn-danger m-3'>Unlike Novel</button>
                            </div>
                        }
                        <div className="text-center">
                            <button onClick={goBack} className='btn btn-primary m-3'>Go Back</button>
                        </div>
                    </div>
                </div> 
                <div className="container col-5 d-none d-s-none d-md-none d-lg-block">
                    {<img src={props.book.imageLinks.medium} alt="Book's cover"/>}
                </div> 
            </div>}
            
        </>
    );
}

export default BookDetail;