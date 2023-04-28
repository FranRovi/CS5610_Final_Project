import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { logoutThunk, profileThunk } from '../services/users/users-thunk';
import { findLikesByUserId } from '../services/likes/likes-service';
import { findUserById } from '../services/users/users-service';
import { findFollowsByFollowedId, findFollowsByFollowerId, userFollowsUser } from '../services/follows/follows-service';

const ProfileWithId = () => {
    // const { currentUser } = useSelector(state => state.users);
    const { profileId } = useParams();
    console.log(profileId);
    const [profile, setProfile] = useState();
    const fetchProfile = async () => {
        const user = await findUserById(profileId);
        setProfile(user);
        return;
    }

    useEffect(()=> {
        fetchProfile();
    }, [profileId]);
    console.log(profile);

return(
    <>
        
        { profile && <div>
            <div className="d-flex justify-content-evenly mt-3">
                <h2>Profile with ID</h2>
                <h1 className=''>Welcome, {profile.username}!</h1>
            </div>
            <div className='d-flex'>
                <div className='col-3 m-2'>
                <img src={profile.profilePic} width={200} className='rounded-circle' alt='user profile icon'/>
                </div>
                <div className='col-7 border border-seconday ps-5 pt-2'>
                    <h2>First Name: {profile.firstname}</h2>
                    <h2>Last Name: {profile.lastname}</h2>
                    <h2>Username: {profile.username}</h2>
                    <h2>Favorite Genre: {profile.favoriteGenre}</h2>
                    <h2>Role: {profile.role}</h2>
                </div>
            </div>
        </div>}
    </>
)
}

export default ProfileWithId;