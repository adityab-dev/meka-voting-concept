import login from "../../Assets/login-img.png";

import { loginNamesArray } from "../../constants/reg-input";

import "./Login.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <img
        className="login-img login-margin-top"
        src={login}
        alt="Please Login"
      />

      <div className="login-form-container login-margin-top">
        <h1 className="login-heading">Login</h1>
        <form>
          {loginNamesArray.map((name) => {
            return (
              <div className="login-form-label-input">
                <label
                  className="login-form-labels"
                  htmlFor={name}
                >
                  {name}
                </label>
                <input
                  className="login-form-inputs"
                  type="text"
                  id={name}
                  required
                />
              </div>
            );
          })}

          <a
            className="login-form-links"
            href="/login"
          >
            Forgot Password ?
          </a>
          <p className="login-form-forget">
            Not a user?
            <a
              className="login-form-links"
              href="/register"
            >
              Register now
            </a>
          </p>
          <button
            className="login-for-btn"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
