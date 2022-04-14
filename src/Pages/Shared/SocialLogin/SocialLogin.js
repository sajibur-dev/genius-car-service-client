import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import facebookLogo from "../../../assets/images/facebook.png";
import githubLogo from "../../../assets/images/github.png";
import Googlelogo from "../../../assets/images/google.png";
import auth from "../../../firebase";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  if (googleUser || githubUser) {
    navigate("/");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {(googleLoading || githubLoading) && (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      )}
      {(googleError || githubError) && <p className="text-danger">{googleError.message}</p>}
      <div>
        <button
          className="btn btn-info d-block mx-auto w-50 my-3"
          onClick={() => signInWithGoogle()}
        >
          <img src={Googlelogo} alt="" />{" "}
          <span className="px-3">google login</span>
        </button>
        <button className="btn btn-info d-block mx-auto w-50 my-3">
          <img src={facebookLogo} alt="" />{" "}
          <span className="px-3">facebook login</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info d-block mx-auto w-50 my-3"
        >
          <img src={githubLogo} alt="" />{" "}
          <span className="px-3">github login</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
