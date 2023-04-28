import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import BookInfo from './Books/book-info';
import BookList from './Books/book-list';
import Register from './Logging/register';
import SignIn from './Logging/sing-in';
import Profile from './User/profile';
import ProfileEdit from  './User/profile-edit';
import ProfileWithId from './User/profile-with-id';
import Nav from  './Nav';
import store from './Redux/store';
import CurrentUserContext from './CurrentUserContext/current-user-content';

function App() {
  return (
    <Provider store={store}>
      <CurrentUserContext>
        <BrowserRouter>
            <div className="container">
              <Nav/>
              <Routes>
                <Route path="/home" element={<BookList />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books/details/:bid" element={<BookInfo />} />
                {/* <Route path="/home/details/:bid" element={<BookList />} /> */}
                <Route path="/books/:searchTerm" element={<BookList />} />
                <Route path="/books" element={<BookList />} />
                
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:profileId" element={<ProfileWithId />} />
                <Route path="/profile/edit" element={<ProfileEdit />} />
                {/* <Redirect to='/' /> */}

              </Routes>
            </div>
        </BrowserRouter>
      </CurrentUserContext>
    </Provider>
  );
}

export default App;
