import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bg from '../../assets/login_bg.png'
import './LoginStyle.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate email and password
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }
    
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/Users/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.message === "Email not exists") {
        alert("Email does not exist");
      } else if (response.data.message === email) {
        // Check if the user is an admin
        const isAdmin = email === "admin@example.com"; // Replace with your admin email
        const isDoctor = response.data.usertype === "doctor";
        
        if (isAdmin) {
          navigate("/AdminHome");
        } else if (isDoctor) {
          navigate("/DoctorHome");
        } else {
          navigate("/UserHome");
        }
      } 
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in.");
    }
  }

  return (
    <>
        <Row className="bg bg-primary rounded">
          
        <h3 className="title-text text-white p-2 ">LAB SYSTEM </h3>
        </Row>


        <Row className="bg bg-white">
          <Col className="col">
              
              <div className="container text-center">
              <img className="" src={bg} alt ="" style={{width : "75%"}}/>

  

            </div>
           
              
          
          </Col>
          <Col className="col" >
            <Container fluid className="login-container py-5">

         
            <div className="login-form" >
              <h2 className="text-center"><center>Login</center></h2>
              <Form onSubmit={login} noValidate>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
            </Container>
          </Col>
        </Row>
        

    </>
  );
}

export default Login;
