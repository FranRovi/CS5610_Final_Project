import React from 'react';
import axios from  'axios';

//const LIKES_API = "http://localhost:4000/api/likes"; 
const USERS_API = "http://localhost:4000/api/users";

export const userLikesAuthor = async (userId, authorName) => {
    const response = await axios.post(`${USERS_API}/${userId}/likes/author/${authorName}`);
    return response.data;
}

export const userLikesNovel = async (userId, novelId) => {
    const response = await axios.post(`${USERS_API}/${userId}/likes/novel/${novelId}`);
    return response.data;
}