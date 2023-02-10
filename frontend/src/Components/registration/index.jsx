import { Axios } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';




const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const NewUser = async ()=>{
    try{
        await Axios.post(`/auth/register`, formData).then(response=>{
            if (response.status === 200){
                console("successfully");
                navigate("/login")
            }
        })
    }catch (err){
        console.log(err)
    }
}    
  function Register(e) {
	e.preventDefault()

	if (handleSubmit(e)) {
         
		 NewUser()

		 return true;
	}
	return false;
}
  const handleSubmit = event => {
    event.preventDefault();
    let formErrors = {};
    if (!formData.username) {
      formErrors.username = 'Username is required';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(formErrors);
  };
  
  return (
    
    <div>
        <Menu />
<form onSubmit={Register}>
        
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div>{errors.username}</div>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};
export default Registration;