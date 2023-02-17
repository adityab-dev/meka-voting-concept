import login from "../../Assets/login-img.png";

import "./Login.css";

import LoginForm from "./LoginForm/LoginForm";

import { Navigate } from "react-router-dom";

import { useContext } from "react";

import login_context from "../../Context/Login-Context/login-context";
import { personalInfoPath } from "../../constants/Paths";

export default function LoginPage() {
  const {
    docsData: { Email },
  } = useContext(login_context);

  return !Email ? (
    <div className="login-container">
      <img className="login-img login-margin-top" src={login} alt="Please Login" />

      <div className="login-form-container login-margin-top">
        <h1 className="login-heading">Login</h1>
        <LoginForm />
      </div>
    </div>
  ) : (
    <Navigate to={personalInfoPath} />
  );
}
