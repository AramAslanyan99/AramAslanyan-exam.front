import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AutoUser from "../Auth/auth";

const Register = () => {
  const { http } = AutoUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = () => {
    http.post("/api/register", formData).then((res) => {
      navigate("/login");
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};
    if (!formData.username) {
      formErrors.username = "Username is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
    }
    setErrors(formErrors);
  };
  function NewUser(e) {
    e.preventDefault();

    if (handleSubmit(e)) {
      submitForm();

      return true;
    }
    return false;
  }
  return (
    <div>
      <div className="container ">
        <h1>Register</h1>
        <div className="row">
          <label>
            <b>User Name</b>
          </label>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
            value={formData.username}
            id="userName"
            required
          />
          {errors.username && <div>{errors.username}</div>}
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            id="email"
            required
          />
          {errors.email && <div>{errors.email}</div>}
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            id="psw"
            required
          />
          {errors.password && <div>{errors.password}</div>}
          <button type="button" onClick={NewUser} className="registerbtn mt-2">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
