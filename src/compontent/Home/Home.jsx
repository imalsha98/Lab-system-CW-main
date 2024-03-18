import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'; // Import the CSS file for Home component
import myImage from '../../assets/5377012.jpg'


const Home = () => {
 return (
  <div>
    <nav className="navbar">
    <h className="logo">ABC Laboratories</h>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/register">Sign Up</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About us</a></li>
      </ul>
    </nav>
    <div className="home-content">
      
      <div className="">
        <div className="text-content">
        <h1>Best Healthcare Solution In Your City </h1>
        </div>
     <div className="button-container-home">
          <Link to="/Login" className="btn btn-primary mr-4">Login</Link>
          <Link to="/register" className="btn btn-secondary">Sign Up</Link>
        </div>
      </div>
      <div className="img-content">
        
        <img src= {myImage} alt="img" style={{width:'500px', height:'500px'}} />
      </div>
    </div>
  </div>
 );
}

export default Home;
