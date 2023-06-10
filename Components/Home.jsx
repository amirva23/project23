import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import '../Components/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {

    const [users,setUsers] = useState([]);


    useEffect(()=>{
        loadUsers();

    }, []);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/showproduct")
        setUsers(result.data);
        console.log(result.data);
    };

  return (
    <div className="container123">
        <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Cost</th>
      <th scope="col">Brand</th>
      <th scope="col">Tax</th>
      <th scope="col">Expirymonth</th>
      <th scope="col">Quantity</th>
      <th scope="col">Offer</th>
      <th scope="col">Stock</th>
      <th scope="col">Supplier</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user)=>(
        <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.cost}</td>
        <td>{user.brand}</td>
        <td>{user.tax}</td>
        <td>{user.expirymonth}</td>
        <td>{user.quantity}</td>
        <td>{user.offer}</td>
        <td>{user.stock}</td>
        <td>{user.supplier}</td>
        <td>

          
          <Link className='btn btn-primary mx-2'to={`/signup`}>Add</Link>
          
          <Link 
          className='btn btn-outline-primary mx-2'
          to={`/editUser/${user.id}`}
          >
            Edit</Link>


          <Link className='btn btn-danger mx-2'
          to={`/deleteUser/${user.id}`}
          >
            Delete</Link>
        </td>
        </tr>
        ))
    }
    
  </tbody>
</table>
        </div>
    </div>
  )
}