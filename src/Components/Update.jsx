import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Update() {
  const location = useLocation();
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState({
    shipify: '',
    date: '',
    status: '',
    customer: '',
    email: '',
    country: '',
    shipping: '',
    source: '',
    ordertype: ''
  });

  useEffect(() => {
    // Fetch the order details from location state
    if (location.state && location.state.order) {
      setOrderDetails(location.state.order);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the order details in local storage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = storedOrders.map(order => {
      if (order.id === orderDetails.id) {
        return { ...order, ...orderDetails };
      }
      return order;
    });
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Update Order Details</h2>
        <label htmlFor="shipify">Shipify:</label>
        <input type="number" id="shipify" name="shipify" value={orderDetails.shipify} onChange={handleChange} required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={orderDetails.date} onChange={handleChange} required />

        <label htmlFor="status">Status:</label>
        <input type="text" id="status" name="status" value={orderDetails.status} onChange={handleChange} required />

        <label htmlFor="customer">Customer:</label>
        <input type="text" id="customer" name="customer" value={orderDetails.customer} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={orderDetails.email} onChange={handleChange} required />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={orderDetails.country} onChange={handleChange} required />

        <label htmlFor="shipping">Shipping:</label>
        <input type="text" id="shipping" name="shipping" value={orderDetails.shipping} onChange={handleChange} required />

        <label htmlFor="source">Source:</label>
        <input type="text" id="source" name="source" value={orderDetails.source} onChange={handleChange} required />

        <label htmlFor="ordertype">Order Type:</label>
        <input type="text" id="ordertype" name="ordertype" value={orderDetails.ordertype} onChange={handleChange} required />

        <button type="submit" className='bg-primary border border-0 text-light px-5 p-2 mt-4 w-50 m-auto rounded-3 fw-bold'>Update</button>
      </form>
    </div>
  );
}

export default Update;
