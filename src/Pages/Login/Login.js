import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase";
import useToken from "../../Hooks/useToken";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, signInError] =
    useSignInWithEmailAndPassword(auth,{sendEmailVerification:true});
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
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
        <button
          onClick={async () => {
            const email = emailRef.current.value;
            await sendPasswordResetEmail(email);
            if(email){
              toast("sent email");
            } else {
              toast("please provide an email")
            }
          }}
          className="btn btn-link text-decoration-none text-primary"
        >
          reset password
        </button>
      </p>
      <SocialLogin />
      <ToastContainer/>
    </div>
  );
};

export default Login;
