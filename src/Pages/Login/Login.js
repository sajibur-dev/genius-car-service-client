import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase";


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/' 
    
    const [
      signInWithEmailAndPassword,
      user,
    ] = useSignInWithEmailAndPassword(auth)
  
  if(user){
    navigate(from, {replace:true})
  }
  
    const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email,password);
  };




  return (
    <div className="container w-50 mx-auto">
        <h2 className="text-primary text-center mt-3">Login...</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          login
        </Button>
      </Form>
      <p>New to genius car ? <Link to='/signup'>singup</Link></p>
    </div>
  );
};

export default Login;
