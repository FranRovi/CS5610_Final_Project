import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../services/users/users-thunk';
import './logging.css';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.users);
    console.log(currentUser);
    console.log(email);
    console.log(password);
    
    const login = async () => {
        try {
            await dispatch(loginThunk({email, password}));
            navigate('/profile');
        } catch (err) {
            console.log(err);    
        }
    }

    return(
        <>
            <div className='row mt-4'>
                <div className='container col-6'>
                    {/* <h2>Login in</h2> */}
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="text"
                            className="form-control m-1"
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="text"
                            className="form-control m-1"
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value)}}/>
                    </div>
                    <button onClick={login} className="btn btn-primary m-1"> Sign In</button>
                    <p className="text-secondary text-center">Don't have an account already? Get one <Link to="/register">here</Link></p>
                    <p className="text-secondary text-center">Procced as a guest with limited interaction by clicking <Link to="/books">here</Link></p>
                </div>
                <div className='container position-relative col-4'>
                    <h1 className="position-absolute text-white wd-title-overlap-login">Login</h1>
                    <img src='../../images/web_dev_final_bookshelf.jpeg' width={250} className='rounded-2' alt='bookshelf filled with books'/>
                </div>
            </div>
            <div>
                {currentUser && (
                    <div>
                        <h2>{currentUser.username}</h2>
                        <h2>{currentUser.password}</h2>
                    </div>
                )}
            </div>
        </>
        
    )
}

export default SignIn;