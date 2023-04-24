import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();
    return(
        <nav className="navbar bg-dark d-flex row" data-bs-theme="dark">
          <div className="col-3">
              <img src="../../images/web_dev_nav_logo.png" alt="Logo" width={50} className="d-inline-block align-text-top rounded-circle text-white"/>
            
            <span className='text-white ps-5'>BOOK API</span>
          </div>
          <div className="col-9 justify-content-evenly">
            <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/login')}>Login</button>
            <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/register')}>Register</button>
            <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/books/:bid/info')}>Book's Info</button>
            <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/books')}>List of Books</button>
            <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/profile')}>User Profile</button>
            <button className="btn btn-dark m-1 text-white" onClick={()=> navigate('/profile/edit')}>Update User Profile</button>
          </div>
        </nav>)};
        {/*<div>
             <button className="btn btn-primary m-1" onClick={()=> navigate('/login')}>Login</button>
              <button className="btn btn-primary m-1" onClick={()=> navigate('/register')}>Register</button>
              <button className="btn btn-primary m-1" onClick={()=> navigate('/books/:bid/info')}>Book's Info</button>
              <button className="btn btn-primary m-1" onClick={()=> navigate('/books')}>List of Books</button>
              <button className="btn btn-primary m-1" onClick={()=> navigate('/profile')}>User Profile</button>
              <button className="btn btn-primary m-1" onClick={()=> navigate('/profile/edit')}>Update User Profile</button>  
            </div>*/}
//     )
// }

export default Nav;