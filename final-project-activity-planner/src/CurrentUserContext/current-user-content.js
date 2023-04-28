import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { profileThunk } from '../services/users/users-thunk';


const CurrentUserContext = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(profileThunk());
    }, []);
    return children;
} 

export default CurrentUserContext;