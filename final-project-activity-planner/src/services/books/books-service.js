import axios from 'axios';

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_BOOK_API_KEY;
const GOOGLE_API = `https://www.googleapis.com/books/v1/volumes`;
//const GOOGLE_API = 'https://www.googleapis.com/books/v1/volumes?q=sherlock&key=AIzaSyDLVmOOnXY7ZiDZrXdL60-ytsTlMz4Tdlc';
//https://www.googleapis.com/books/v1/volumes?q=sherlock&maxResults=40&key=AIzaSyDLVmOOnXY7ZiDZrXdL60-ytsTlMz4Tdlc
// ?q=suspense+subject${GOOGLE_KEY}`);

export const getAllBooks = async (query) => {
    const response = await axios.get(`${GOOGLE_API}?q=${query}&key=${GOOGLE_KEY}&maxResults=30`);
    return response.data;

}

export const getBookById = async (bid) => {
    //console.log("Hello");
    const response = await axios.get(`${GOOGLE_API}/${bid}?${GOOGLE_KEY}`);
    console.log(response);
    return response.data;
}

// add missing services 
