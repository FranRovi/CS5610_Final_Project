import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Nav = () => {
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.users);
    return(
      <nav className="navbar bg-dark d-flex row mt-1" data-bs-theme="dark">
        <div className="col-3">
            <img src="../../images/web_dev_nav_logo.png" alt="Logo" width={50} className="d-inline-block align-text-top rounded-circle text-white"/>
          <span className='text-white ps-5'> GOOGLE BOOK API</span>
        </div>
        <div className="col-9 justify-content-evenly">
          { !currentUser && <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/login')}>Login</button>}
          { !currentUser && <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/register')}>Register</button>}
          {/* <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/books/:bid/info')}>Book's Info</button> */}
          <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/books')}>List of Books</button>
          { currentUser && <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/profile')}>User Profile</button>}
          {/* <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/profile/edit')}>Update User Profile</button> */}
        </div>
      </nav>
    )
};

export default Nav;