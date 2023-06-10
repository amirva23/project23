import axios from 'axios';
import './Signup.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        id:"",
        name:"",
        cost:"",
        brand:"",
        tax:"",
        expirymonth:"",
        quantity:"",
        offer:"",
        stock:"",
        supplier:"",
    })

    const {id,name,cost,brand,tax,expirymonth,quantity,offer,stock,supplier}=user

    const onInputChange=(e)=>{

        setUser({...user, [e.target.name]:e.target.value})
    }

    const onSubmit=async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/SaveProduct", user);
        navigate("/");
    }

  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>ADD DATA</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
               
                <div className='mb-4'>
                    <label htmlFor='id' className='form-label'>
                        Id
                    </label> 
                    <input
                    type={"number"} 
                    className='form-control'
                    placeholder='id'    
                    name='id'
                    value={id}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input
                    type={"text"} 
                    className='form-control'
                    placeholder='name'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>


                <div className='mb-4'>
                    <label htmlFor='cost' className='form-label'>
                        Cost
                    </label>
                    <input
                    type={'text'} 
                    className='form-control'
                    placeholder='cost'
                    name='cost'
                    value={cost}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>


                <div className='mb-4'>
                    <label htmlFor='brand' className='form-label'>
                        Brand
                    </label>
                    <input
                    type={'text'} 
                    className='form-control'
                    placeholder='brand'
                    name='brand'
                    value={brand}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>


                <div className='mb-4'>
                    <label htmlFor='expirymonth' className='form-label'>
                        Expirymonth
                    </label>
                    <input
                    type={'text'} 
                    className='form-control'
                    placeholder='expirymonth'
                    name='expirymonth'
                    value={expirymonth}
                    onChange={(e)=>onInputChange(e)}
                    />
                    <div/>
                </div>


                <div className='mb-4'>
                    <label htmlFor='tax' className='form-label'>
                        Tax
                    </label>
                    <input
                    type={'text'} 
                    className='form-control'
                    placeholder='tax'
                    name='tax'
                    value={tax}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor='quantity' className='form-label'>
                        Quantity
                    </label>
                    <input
                    type={'quantity'} 
                    className='form-control'
                    placeholder='quantity'
                    name='quantity'
                    value={quantity}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>


                <div className='mb-4'>
                    <label htmlFor='offer' className='form-label'>
                        Offer
                    </label>
                    <input
                    type={'text'} 
                    className='form-control'
                    placeholder='offer'
                    name='offer'
                    value={offer}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor='stock' className='form-label'>
                        Stock
                    </label>
                    <input
                    type={'text'} 
                    className='form-control'
                    placeholder='stock'
                    name='stock'
                    value={stock}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>



                <div className='mb-4'>
                    <label htmlFor='supplier' className='form-label'>
                        Supplier
                    </label>
                    <input
                    type={'supplier'} 
                    className='form-control'
                    placeholder='supplier'
                    name='supplier'
                    value={supplier}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                
                <button type='submit' className='btn btn-outline-primary'>ADD</button>
                <Link className='btn btn-outline-danger m-2' to={"/"}>Cancel</Link>
                </form>
                <Link to={"/home"}>Login</Link>
            </div>
        </div>
    </div>
  )
}