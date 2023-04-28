import React from 'react';
import axios from  'axios';

//const LIKES_API = "http://localhost:4000/api/likes"; 
const USERS_API = "http://localhost:4000/api/users";

export const userLikesAuthor = async (userId, authorName) => {
    const response = await axios.post(`${USERS_API}/${userId}/likes/authors/${authorName}`);
    return response.data;
}

export const userLikesNovel = async (userId, novelId) => {
    const response = await axios.post(`${USERS_API}/${userId}/likes/novels/${novelId}`);
    return response.data;
}

export const findLikesByUserId = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}/likes`);
    return response.data;
}