import React from 'react';
import './UserHome.css'; // Import the CSS file for Home component
import { Link } from "react-router-dom";

const UserHome = () => {
 return (
  <div>
    <nav className="navbar">
      <h className="logo">ABC Laboratories</h>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/appointmentbooking">Get Appoinment</a></li>
    
      </ul>
    </nav>
    <div className="home-content">
      <div className="right-bg">
        <img className="position-absolute w-100 h-100 rounded" src="D:\Adv project\lab-frontend\lab-frontend\src\assets\shutterstock_530971462.jpg" style={{ objectFit: 'cover' }} alt="Right background" />
      </div>
      <div className="text-content">
        <h1>Providing Excellence in Medical Laboratory Care </h1>
       
        <div className="button-container">
          <Link to="/appointmentbooking" className="btn btn-primary mr-4">Appoinment</Link>
          <Link to="/pay" className="btn btn-secondary">Payment</Link>
        </div>
      </div>
    </div>
  </div>
 );
}

export default UserHome;
