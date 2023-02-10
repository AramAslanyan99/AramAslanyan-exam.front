import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<div className='Menu'>
			<ul>
				<li>
					<NavLink to="/Login">Login</NavLink>  
				</li>
				<li>
					<NavLink to="/Registration">Register</NavLink>
				</li>
				<li>
					<NavLink to="/tasks">Tasks</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;