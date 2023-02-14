import login from "../../Assets/login-img.png";

import "./Login.css";

import LoginForm from "./LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="login-container">
      <img className="login-img login-margin-top" src={login} alt="Please Login" />

      <div className="login-form-container login-margin-top">
        <h1 className="login-heading">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
