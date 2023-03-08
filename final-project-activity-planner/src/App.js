import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import NewActivity from './Activities/activity-new';
import ListActivity from './Activities/activity-list';
import Register from './Logging/register';
import SignIn from './Logging/sing-in';

function App() {
  return (
    <BrowserRouter>
      
        <div className="container text-danger">
          <h1>Final Project</h1>
          <h1>Activity planner</h1>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/activity/new" element={<NewActivity />} />
            <Route path="/activity" element={<ListActivity />} />
            

          </Routes>
          
        </div>
      
    </BrowserRouter>
    
  );
}

export default App;
