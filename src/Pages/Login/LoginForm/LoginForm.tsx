import { Link } from "react-router-dom";

import { loginPath, registerPath } from "../../../constants/Paths";
import { loginNamesArray } from "../../../constants/reg-input";

import { useContext } from "react";

import login_context from "../../../Context/Login-Context/login-context";

export default function LoginForm() {
  const { inputValues, inputChangeHandler, formSubmitHandler } = useContext(login_context);

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        {loginNamesArray.map((name) => {
          const currentInputValue = inputValues[name];

          return (
            <div key={name} className="login-form-label-input">
              <label className="login-form-labels" htmlFor={name}>
                {name}
              </label>
              <input
                className="login-form-inputs"
                name={name}
                type={name}
                id={name}
                required
                onChange={inputChangeHandler}
                value={currentInputValue}
              />
            </div>
          );
        })}

        <Link className="login-form-links" to={loginPath}>
          Forgot Password ?
        </Link>
        <p className="login-form-forget">
          Not a user ?
          <Link className="login-form-links" to={registerPath} style={{ paddingLeft: ".25rem" }}>
            Register now
          </Link>
        </p>
        <button className="login-form-btn" type="submit">
          LOGIN
        </button>
      </form>
    </>
  );
}
