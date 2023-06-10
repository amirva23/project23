import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function DeleteUser() {
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



  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8080/deleteProductByName/${user.name}`, user);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/deleteProductByName/${user.name}`);
      setUser(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">DELETE DATA</h2>
          <form onSubmit={(e) => onSubmit(e)}>


            <div className="mb-4">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Id"
                name="id"
                value={user.id}
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
                value={user.name}
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
                placeholder="Enter your Cost"
                name="cost"
                value={user.cost}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="brand" className="form-label">
                Brand
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Brand"
                name="brand"
                value={user.brand}
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
                value={user.tax}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="expirymonth" className="form-label">
                Expirymonth
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Expirymonth"
                name="expirymonth"
                value={user.expirymonth}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Quantity"
                name="quantity"
                value={user.quantity}
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
                value={user.offer}
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
                value={user.stock}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <div className="mb-4">
              <label htmlFor="supplier" className="form-label">
                supplier
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your supplier"
                name="supplier"
                value={user.supplier}
                onChange={(e) => onInputChange(e)}
              />
            </div> 


            <button type="submit" className="btn btn-outline-primary">
              Delete
            </button>

            
            <Link className="btn btn-outline-primary m-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}