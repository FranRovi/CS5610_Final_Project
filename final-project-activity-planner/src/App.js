import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import BookInfo from './Books/book-info';
import BookList from './Books/book-list';
import Register from './Logging/register';
import SignIn from './Logging/sing-in';
import Profile from './User/profile';
import ProfileEdit from  './User/profile-edit';
import Nav from  './Nav';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <div className="container">
            <Nav/>
            <Routes>
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/books/details/:bid" element={<BookInfo />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/books/:searchTerm" element={<BookList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<ProfileEdit />} />
            </Routes>
          </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
