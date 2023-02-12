import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../Home/home';
import Login from '../Login/login';
import Register from '../Register/register';


const Navbar = () => {
 

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
               <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
                  <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
        <div className="container">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </div> 
      </div>
    )
}
export default Navbar;