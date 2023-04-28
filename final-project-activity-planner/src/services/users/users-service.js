import axios from 'axios';

const USERS_API_URL = 'http://localhost:4000/api/users';

const api = axios.create({
    withCredentials: true
});

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API_URL);
    return response.data;
};

export const findUserById = async (id) => {
    const response = await axios.get(`${USERS_API_URL}/userId/${id}`);
    return response.data;
}

export const createUser = async (user) => {
    return axios.post(USERS_API_URL, user);
}

export const updateUser = async (newUser) => {
    //return api.post(`${USERS_API_URL}/${newUser._id}`, newUser);
    //return axios.put(`${USERS_API_URL}/${newUser._id}`, newUser);
    return api.put(`${USERS_API_URL}/${newUser._id}`, newUser);
}

export const deleteUser = async (id) => {
    return axios.delete(`${USERS_API_URL}/${id}`);
}

export const login = async (user) => {
    return api.post(`${USERS_API_URL}/login`, user);
    //return axios.post(`${USERS_API_URL}/login`, user);
}

export const logout = async () => {
    return api.post(`${USERS_API_URL}/logout`);
    //return axios.get(`${USERS_API_URL}/logout`);
}

export const register = async (user) => {
    return api.post(`${USERS_API_URL}/register`, user);
    //return axios.post(`${USERS_API_URL}/register`, user);
    
}

export const profile = async () => {
    return api.get(`${USERS_API_URL}/profile`);
    //return axios.get(`${USERS_API_URL}/profile`);
}

