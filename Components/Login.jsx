import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [LoginModel, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = LoginModel;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        
      if (!username || !password) {
        console.log('Please enter both username and password');
        return;
      }

      
      const response = await axios.post('http://localhost:8080/data/login', LoginModel);

      if (response.data==="Login Successful")
       {
        console.log('Login successful');
        alert("Login Success!!");
        navigate('/home');
      } 
      else 
      {
        console.log('Invalid username or password');
        alert('Invalid username or password');

      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login User</h2>
          <br></br>
          <br></br>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter UserName"
                name="username"
                value={username}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <br></br>
            <br></br>
            <button type="submit" className="btn btn-outline-primary">
              Log In
            </button>
            <Link className="btn btn-outline-danger m-2" to="/">
              Cancel
            </Link>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}