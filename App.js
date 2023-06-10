import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

// import "myproject/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import EditUser from './Components/EditUser';
import DeleteUser from './Components/DeleteUser';

const App = () => {
  return (
    <div className='App'>
   
        <Routes>

        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/editUser/:userid" element={<EditUser/>}/>
        <Route exact path="/deleteUser/:userid" element={<DeleteUser/>}/>
        </Routes>

       
    </div>
  );
};

export default App;
