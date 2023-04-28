import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk, profileThunk } from '../services/users/users-thunk';
import { findLikesByUserId } from '../services/likes/likes-service';
import { findUserById } from '../services/users/users-service';
import { findFollowsByFollowedId, findFollowsByFollowerId, userFollowsUser } from '../services/follows/follows-service';

const Profile = () => {
    const { currentUser } = useSelector(state => state.users);
    // const currentUser = req.session["currentUser"];
    const { userId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [profile, setProfile] = useState(currentUser);
    const [likes, setLikes] = useState([]);
    const [followings, setFollowings] = useState([]);
    const [follows, setFollows] = useState([]);
    const fetchFollowings = async () => {
        const followings = await findFollowsByFollowerId(profile.id);
        setFollowings(followings);
    }
    const fetchFollowers = async () => {
        const follows = await findFollowsByFollowedId(profile._id);
        setFollows(follows);
    }
    const fetchLikes = async () => {
        const likes = await findLikesByUserId(currentUser._id);
        setLikes(likes);
    }
    const fetchProfile = async () => {
        if (userId) {
            const user = await findUserById(userId);
            setProfile(user);
            return;
        }
        await dispatch(profileThunk());
    }
    const loadScreen = async () => {
        // if (!profile) {
            await fetchProfile();
        // }
        if (!profile) return;
        await fetchLikes();
        await fetchFollowings();
        await fetchFollowers();
    }
    
    useEffect(() => {
        loadScreen();
    }, [userId]);
    const logoutClickHandler = () => {
        dispatch(logoutThunk(currentUser));
        navigate('/login');
    }
    const updateProfile = () => {
        navigate('/profile/edit');
    }
    const followUserClickHandler = async () => {
        await userFollowsUser(currentUser._id, profile._id);
    };
    console.log(likes);
    console.log(followings);
    return(
        <div>
            <div className="d-flex justify-content-between mt-3">
                <h2>Profile </h2>
                <h1>Welcome, {currentUser.username}!</h1>
                <button onClick={logoutClickHandler} className='btn btn-danger'>Logout</button>
            </div>
            {/* {profile && <div>
                <h2>Profile</h2>
                <div>
                    <h3>{profile.username}</h3>
                </div>
            </div>}
            {followings && <div>
                <h2>Followings</h2>
                <div>
                    <h3>{profile.username}</h3>
                </div>
            </div>} */}
            <div className='d-flex'>
                <div className='col-3 m-2 d-none d-s-none d-md-none d-lg-block'>
                <img src={currentUser.profilePic} width={200} className='rounded-circle' alt='user profile icon'/>
                </div>
                <div className='col-7 col-xs-12 col-sm-10  col-lg-8 col-xl-10 border border-seconday ps-5 pt-2'>
                    <h2>First Name: {currentUser.firstname}</h2>
                    <h2>Last Name: {currentUser.lastname}</h2>
                    <h2>Username: {currentUser.username}</h2>
                    <h2>Favorite Genre: {currentUser.favoriteGenre}</h2>
                    <h2>Role: {currentUser.role}</h2>
                </div>
            </div>
            {   typeof userId === undefined ? <button className="btn btn-primary mt-2 ms-5 disabled"> Update Profile</button> : <button className="btn btn-primary mt-2 ms-5" onClick={updateProfile}> Update Profile</button>
            }
            
            {/* iteration over likes */}
            <p>Likes</p>
            <ul className="list-group">
                {
                    likes.map(like => {
                        <li className='list-group-item'>
                            <Link to={`/books/details/${like._id}`}>
                                <h3>{like}</h3>
                            </Link>
                        </li>
                    })
                }
            </ul>
            {/* iteration over likes */}
            <p>Followings</p>
            <ul className="list-group">
                {
                    followings.map(follow => {
                        <li className='list-group-item'>
                            <Link to={`/profile/${follow.followed._id}`}>
                                <h3>{follow.followed.username}</h3>
                                <h3>{follow.followed._id}</h3>
                            </Link>
                        </li>
                    })
                }
            </ul>
            <p>Followers</p>
            <ul className="list-group">
                { follows &&
                    follows.map(follow => {
                        <li className='list-group-item'>
                            <Link to={`/profile/${follow.followed._id}`}>
                                <h3>{follow.followed.username}</h3>
                                <h3>{follow.followed._id}</h3>
                            </Link>
                        </li>
                    })
                }
            </ul>
            {/* button to follow or unfollow */}
            <button className='btn btn-primary float-end' onClick={followUserClickHandler}>
                Follow
            </button> 
        </div>
    )
}

export default Profile;