import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-3">Login...</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control
            type="email"
            className="p-3 border-2 border-dark fs-3 ouline-none"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control
            className="p-3 border-2 border-dark fs-3 outline-none"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </Form.Group>

        <Button
          className="w-50 d-block mx-auto"
          variant="primary"
          type="submit"
        >
          login
        </Button>
      </Form>
      {signInError && <p>{signInError?.message}</p>}
      <p>
        New to genius car ?{" "}
        <Link to="/signup" className="text-primary text-decoration-none fs-3">
          singup
        </Link>
      </p>
      <p>
        Forgate password ?{" "}
        <Link
          to="/signup"
          onClick={async () => {
            const email = emailRef.current.value;
            await sendPasswordResetEmail(email);
            alert("sent email");
          }}
          className="text-primary text-decoration-none fs-3"
        >
          reset password
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
