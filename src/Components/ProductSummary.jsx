import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const ProductSummary = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    // Fetch all orders from local storage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);
  
  const handleEditClick = (order) => {
    navigate(`/update/${order.id}`, { state: { order } });
  };

  // Get current orders based on current page
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='productSum m-4'>
         <div className="row product d-flex align-items-center">
            <div className="col-xxl-4">
                <h5 className='fw-bold'>Product Summary</h5>
            </div>
            <div className="col-xxl-6 showBtn gap-5">
                <div className="d-flex gap-3 d-flex align-items-center fw-bold">
                    <label htmlFor="show">Show</label>
                    <select className='border border-secondary border-opacity-25 rounded p-2 fw-bold'>
                        <option value="selectAll">ALL COLUMN</option>

                    </select>
                </div>
                <div className="btn">
                    <button type='button' className='bg-primary border border-0 text-light px-5 p-2 rounded-3'>
                        DISPATCH SELECTED
                    </button>
                </div>
                
            </div>
            <nav className='col-xxl-2 mt-2'>
                <ul className='pagination justify-content-center border-0'>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true" style={{ fontSize: '1rem' }}>&laquo;</span>
                        </a>
                    </li>
                    {Array.from({ length: Math.ceil(orders.length / itemsPerPage) }).map((_, index) => (
                    <li key={index} className='page-item'>
                        <button onClick={() => paginate(index + 1)} className='page-link' style={{ fontSize: '1rem' }}>{index + 1}</button>
                    </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true" style={{ fontSize: '1rem' }}>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
      {orders.length > 0 ? (
        <div className='table-responsive'>
            <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>SHPIIFY #</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>CUSTOMER</th>
              <th>EMAIL</th>
              <th>COUNTRY</th>
              <th>SHIPPING</th>
              <th>SOURCE</th>
              <th>ORDER TYPE</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders && currentOrders.map((order, index) => (
              <tr key={index} className='fw-semibold fs-3'>
                <td>
                  <input
                    type="checkbox"
                  /> {order.id}
                </td>
               
                <td>{order.shipify}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.customer}</td>
                <td>{order.email}</td>
                <td>{order.country}</td>
                <td>{order.shipping}</td>
                <td>{order.source}</td>
                <td>{order.ordertype}</td>
                <td>
                    <Link to={`/update/${order.id}`}>
                        <i className="bi bi-pencil-square" style={{cursor:"pointer", color:"grey"}} onClick={() => handleEditClick(order)}></i>
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default ProductSummary;
