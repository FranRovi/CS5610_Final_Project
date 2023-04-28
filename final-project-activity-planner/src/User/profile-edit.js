import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserThunk, deleteUserThunk, logoutThunk } from '../services/users/users-thunk';


const ProfileEdit = () => {
    const { currentUser } = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ updateFirstName, setUpdateFirstName] = useState(currentUser.firstname);
    const [ updateFavGenre, setUpdateFavGenre] = useState(currentUser.favoriteGenre);
    const [ editFirstName, setEditFirstName ] = useState(false);
    const [ editLastName, setEditLastName ] = useState(false);
    const [ editUserName, setEditUserName ] = useState(false);
    const [ editPassword, setEditPassword ] = useState(false);
    const [ editFavoriteGenre, setEditFavoriteGenre ] = useState(false);
    
    // implement button
    const saveChange = async () => {
        await dispatch(updateUserThunk(currentUser.id, 
            {
                ...currentUser,
                firstname: updateFirstName,
            }
        ));
        // updateFirstNameHandler;
    }

    const editFirstNameHandler = () => {
        const valueToSet = editFirstName === false ? true : false;
        setEditFirstName(valueToSet);
    }
    const updateFirstNameHandler = () => {
        setUpdateFirstName();
        const valueToSet = editFirstName === false ? true : false;
        setEditFirstName(valueToSet);
    }
    
    const editLastNameHandler = () => {
        const valueToSet = editLastName === false ? true : false;
        setEditLastName(valueToSet);
    }
    const editUserNameHandler = () => {
        const valueToSet = editUserName === false ? true : false;
        setEditUserName(valueToSet);
    }
    const editPasswordHandler = () => {
        const valueToSet = editPassword === false ? true : false;
        setEditPassword(valueToSet);
    }
    const editFavoriteGenreHandler = () => {
        const valueToSet = editFavoriteGenre === false ? true : false;
        setEditFavoriteGenre(valueToSet);
    }

    const goBack = () => {
        //dispatch(logoutThunk());
        navigate('/profile');
    }
    const deleteAccount = () => {
        dispatch(deleteUserThunk(currentUser._id));
        dispatch(logoutThunk(currentUser));
        navigate('/login');
    }
    return(
        <div>
            <h1>Update Profile</h1>
            <div className='d-flex'>
                <div className='col-3 m-2 d-none d-s-none d-md-none d-lg-block'>
                <img src={currentUser.profilePic} width={200} className='rounded-circle' alt='user profile icon'/>
                </div>
                <div className='col-xs-11 col-sm-10 col-7 col-lg-6 border border-seconday ps-5 pt-2'>
                    <div className="d-flex">
                        <div className='col-9 d-flex'>
                            <h2 className="pe-1">First Name: </h2>
                            {!editFirstName && <h2> {updateFirstName}</h2>}
                            {editFirstName && <input defaultValue={currentUser.firstname}/>}
                        </div>
                        <div className='col-2'>
                            {editFirstName === false ? <button className='btn btn-info float-end m-2 text-white' onClick={editFirstNameHandler}>Edit</button> : <button className='btn btn-info float-end m-2 text-white' onChange={(event)=>setUpdateFirstName(event.target.value)} onClick={saveChange}>Save</button>}
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className='col-9 d-flex'>
                        <h2 className="pe-1">Last Name: </h2>
                            {!editLastName && <h2> {currentUser.lastname}</h2>}
                            {editLastName && <input defaultValue={currentUser.lastname}/>}
                        </div>
                        <div className='col-2'>
                            {editLastName === false ? <button className='btn btn-info float-end m-2 text-white' onClick={editLastNameHandler}>Edit</button> : <button className='btn btn-info float-end m-2 text-white' onClick={saveChange}>Save</button>}
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className='col-9 d-flex'>
                        <h2 className="pe-1">Username: </h2>
                            {!editUserName && <h2> {currentUser.username}</h2>}
                            {editUserName && <input defaultValue={currentUser.username}/>}
                        </div>
                        <div className='col-2'>
                            {editUserName === false ? <button className='btn btn-info float-end m-2 text-white' onClick={editUserNameHandler}>Edit</button> : <button className='btn btn-info float-end m-2 text-white' onClick={saveChange}>Save</button>}
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className='col-9 d-flex'>
                        <h2 className="pe-1">Password:</h2>
                            {!editPassword && <h2> {currentUser.password}</h2>}
                            {editPassword && <input defaultValue={currentUser.password}/>}
                            
                        </div>
                        <div className='col-2'>
                            {editPassword === false ? <button className='btn btn-info float-end m-2 text-white' onClick={editPasswordHandler}>Edit</button> : <button className='btn btn-info float-end m-2 text-white' onClick={saveChange}>Save</button>}
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className='col-9'>
                            <h2>Favorite Genre: </h2><input type='text' defaultValue={updateFavGenre} onChange={event => setUpdateFavGenre(event.target.valvue) } />
                        </div>
                        <div className='col-2'>
                            {/* {currentUser._id} */}
                            {/* {currentUser.id} */}
                            <button className='btn btn-info float-end m-2 text-white' onClick={()=> dispatch(updateUserThunk({...currentUser, updateFavGenre}))}> Save</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className='col-9'>
                            <h2>Role: {currentUser.role}</h2>
                        </div>
                        <div className='col-2'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-5">
                <button onClick={goBack} className='btn btn-primary'>Go Back</button>
                <button onClick={deleteAccount} className='btn btn-danger'>Delete Account</button>
            </div>
        </div>
    )
}

export default ProfileEdit;