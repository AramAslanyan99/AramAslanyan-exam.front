import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import AutoUser from '../Auth/auth';
import Dashboard from '../Dashboard/dashboard';
import Home from '../Home/home';
import Create from '../Tasks/create';
import Edit from '../Tasks/edit';
import Show from '../Tasks/show';


const SignIn = () => {
    const {token,logout} = AutoUser()
    const logoutUser = () => {
        if(token !== undefined){
                logout();
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
             <NavLink className="nav-link" to="/">Home</NavLink>
          </li>

          <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink className="nav-link"  to="/create">Create Task</NavLink>
          </li>
          <li className="nav-item">
                <button className="nav-link bg-dark"  onClick={logoutUser}>Logout</button>
          </li>
        </ul>
      </nav>
      <div className="container">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard  />} />  
     
        <Route path="/create" element={<Create />} />
        <Route path="/show/{id}" element={<Show  />} />  
        <Route path="/edit{id}" element={<Edit  />} />  
      </Routes>
      </div> 
        </div>
    );
};

export default SignIn;