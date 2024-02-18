import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


function Create() {
  const navigate = useNavigate()
  const generateRandomId = () => {
    return Math.floor(1000000 + Math.random() * 9000000);
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = generateRandomId();
    const orderDetailsData = {
      id: orderId.toString(),
      shipify: orderDetails.shipify,
      date: orderDetails.date,
      status: orderDetails.status,
      customer: orderDetails.customer,
      email: orderDetails.email,
      country: orderDetails.country,
      shipping: orderDetails.shipping,
      source: orderDetails.source,
      ordertype: orderDetails.ordertype
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = [...existingOrders, orderDetailsData];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    navigate('/');
  };


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h2>Order Details</h2>
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

        <button type="submit" className='bg-primary border border-0 text-light px-5 p-2 mt-4 w-50 m-auto rounded-3 fw-bold'>Submit</button>
      </form>
    </div>
  );
}

export default Create;
