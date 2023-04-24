import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../services/users/users-thunk';

const ProfileEdit = () => {
    const { currentUser } = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const saveChanges = () => {
        dispatch(logoutThunk());
        navigate('/profile');
    }
    const deleteAccount = () => {
        navigate('/login');
    }
    return(
        <div>
            <h1>Update Profile</h1>
            <div className='d-flex'>
                <div className='col-3 m-2'>
                <img src={currentUser.profilePic} width={200} className='rounded-circle' alt='user profile icon'/>
                </div>
                <div className='col-7 border border-seconday ps-5 pt-2'>
                    <h2>First Name: {currentUser.firstname}</h2>
                    <h2>Last Name: {currentUser.lastname}</h2>
                    <h2>Username: {currentUser.username}</h2>
                    <h2>Password: {currentUser.password}</h2>
                    <h2>Favorite Genre: {currentUser.favoriteGenre}</h2>
                    <h2>Role: {currentUser.role}</h2>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-5">
                <button onClick={saveChanges} className='btn btn-primary'>Save changes</button>
                <button onClick={deleteAccount} className='btn btn-danger'>Delete Account</button>
            </div>
        </div>
    )
}

export default ProfileEdit;