import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/books/books-service';
import BookDetail from './book-details';

const BookInfo = () => {
    const { bid } = useParams();
    console.log(bid)
    const [ bookDetails, setBookDetails ] = useState();
    const [ bookId, setBookId ] = useState();
    const fetchSingleBook = async () => {
        const response = await getBookById(bid);
        console.log(response);
        setBookId(response._id);
        console.log(bookId);

        setBookDetails(response.volumeInfo);
    };
    
    useEffect(() => {
        // console.log("Hello ")
        fetchSingleBook();
    },[]);   
    console.log(bookDetails)
    
    return(
        <>
            <BookDetail book={bookDetails} id={bid} />
        </>
    )
}

export default BookInfo