import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk, profileThunk } from '../services/users/users-thunk';

const Profile = () => {
    const { currentUser } = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profileThunk());
    })
    const logout = () => {
        dispatch(logoutThunk());
        navigate('/login');
    }
    const updateProfile = () => {
        navigate('/profile/edit');
    }
    return(
        <div>
            <div className="d-flex justify-content-between">
                <h1>Welcome, {currentUser.username}!</h1>
                <button onClick={logout} className='btn btn-danger'>Logout</button>
            </div>
            <div className='d-flex'>
                <div className='col-3 m-2'>
                <img src={currentUser.profilePic} width={200} className='rounded-circle' alt='user profile icon'/>
                </div>
                <div className='col-7 border border-seconday ps-5 pt-2'>
                    <h2>First Name: {currentUser.firstname}</h2>
                    <h2>Last Name: {currentUser.lastname}</h2>
                    <h2>Username: {currentUser.username}</h2>
                    <h2>Favorite Genre: {currentUser.favoriteGenre}</h2>
                    <h2>Role: {currentUser.role}</h2>
                </div>
            </div>
            <button className="btn btn-primary mt-2 ms-5" onClick={updateProfile}> Update Profile</button> 
        </div>
    )
}

export default Profile;