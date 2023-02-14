import { loginNamesArray } from "../../../constants/reg-input";

export default function LoginForm() {
  return (
    <form>
      {loginNamesArray.map((name) => {
        return (
          <div className="login-form-label-input">
            <label className="login-form-labels" htmlFor={name}>
              {name}
            </label>
            <input className="login-form-inputs" type="text" id={name} required />
          </div>
        );
      })}

      <a className="login-form-links" href="/login">
        Forgot Password ?
      </a>
      <p className="login-form-forget">
        Not a user?
        <a className="login-form-links" href="/register">
          Register now
        </a>
      </p>
      <button className="login-for-btn" type="submit">
        LOGIN
      </button>
    </form>
  );
}
