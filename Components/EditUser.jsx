import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    id: "",
    name: "",
    cost:"",
    brand:"",
    tax:"",
    expirymonth:"",
    quantity:"",
    offer:"",
    stock:"",
    supplier:"",
  });

  const { name,gender,brand,tax,expirymonth,quantity,offer,stock,supplier } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/${id}`, user);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/users/${name}`);
      setUser(result.data);
    } catch (error) {
      console.error(error);
      // Handle error, show appropriate messtax to the user, etc.
    }
  };

  return (
    <div className="container123">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">EDIT DATA</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-4">
              <label htmlFor="id" className="form-label">
                id
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your id"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>



            <div className="mb-4">
              <label htmlFor="cost" className="form-label">
               Cost
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your cost"
                name="cost"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="brand" className="form-label">
                brand
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your brand"
                name="brand"
                value={brand}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="tax" className="form-label">
                Tax
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Tax"
                name="tax"
                value={tax}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="expirymonth" className="form-label">
                Expirymonth
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Expirymonth"
                name="expirymonth"
                value={expirymonth}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="offer" className="form-label">
                Offer
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Offer"
                name="offer"
                value={offer}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Stock"
                name="stock"
                value={stock}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="supplier" className="form-label">
                Supplier
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Supplier"
                name="supplier"
                value={supplier}
                onChange={(e) => onInputChange(e)}
              />
            </div> 
            <button type="Submit" className="btn btn-outline-primary">
              EDITED
            </button>
            <Link className="btn btn-outline-danger m-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}