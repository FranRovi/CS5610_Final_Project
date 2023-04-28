import React, { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../services/users/users-thunk';
import './logging.css';


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    console.log(firstname);
    console.log(lastname);
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    const createUser = async () => {
        try {
            await dispatch(registerThunk({firstname, lastname, username, email, password}));
            navigate('/profile');
        } catch (err) {
            console.log(err);    
        }
    }

    return(
        <>
            {/* <div className='row mt-4'>
                <div className='container position-relative col-4'>
                    <h1 className="position-absolute text-white wd-title-overlap-register">Register</h1>
                    <img src='../../images/web_dev_final_bookshelf.jpeg' width={250} className='rounded-2' alt='bookshelf filled with books'/>
                </div>
            </div> */}
            <div className='row mt-4'>
                <div className='container position-relative col-3 d-none d-s-none d-md-none d-lg-block'>
                    <h1 className="position-absolute text-white wd-title-overlap-register">Register</h1>
                    <img src='../../images/web_dev_final_bookshelf.jpeg' width={250} className='rounded-2' alt='bookshelf filled with books'/>
                </div>
                <div className='container col-7'>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input type="text"
                            className="form-control m-1"
                            value={firstname}
                            onChange={e => {
                                setFirstname(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input type="text"
                            className="form-control m-1"
                            value={lastname}
                            onChange={e => {
                                setLastname(e.target.value)}}/>
                    </div>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type="text"
                            className="form-control m-1"
                            value={username}
                            onChange={e => {
                                setUsername(e.target.value)}}/>
                    </div>
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
                    <div className='form-group'>
                        <label>Confirm Password</label>
                        <input type="text"
                            className="form-control m-1"
                            value={confirmPassword}
                            onChange={e => {
                                setConfirmPassword(e.target.value)}}/>
                    </div>                    
                        {
                            password !== confirmPassword || password.length === 0 ? <div className='text-center'><button className="btn btn-primary m-1 mt-2" disabled> Register</button></div> : <div className='text-center'><button className="btn btn-primary m-1 mt-2" onClick={createUser}> Register </button></div> 
                        }
                    <p className="text-secondary text-center mt-5">Already have an account? Sign in <Link to='/login'>here</Link></p>
                    <p className="text-secondary text-center">Procced as a guest with limited interaction by clicking <Link to="/books">here</Link></p>
                </div>
            </div>
        </>   
    )
    
}

export default Register;