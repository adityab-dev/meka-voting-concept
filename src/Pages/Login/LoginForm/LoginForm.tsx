import { loginPath, registerPath } from "../../../constants/Paths";
import { loginNamesArray } from "../../../constants/reg-input";

import { useState, useContext } from "react";
import { OnChange } from "../../../Types/voting-candidate";

import { EMAIL, PASSWORD } from "../../../constants/reg-input";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, database } from "../../../firebase-config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { useEffect } from "react";
import { context } from "../../../Context/context";

export type LoginCredentials = {
  [EMAIL]: string;
  [PASSWORD]: string;
};

export const initialInputValues: LoginCredentials = {
  [EMAIL]: "",
  [PASSWORD]: "",
};

export default function LoginForm() {
  // const [inputValues, setInputValues] = useState<LoginCredentials>(initialInputValues);

  const ctx = useContext(context);
  const { inputValues, inputChangeHandler, formSubmitHandler } = ctx;

  // const [state, setState] = useState<any>();
  // const dbInstance = collection(database, "users");

  // useEffect(() => {
  //   async function getData() {
  //     const data = await getDocs(dbInstance);

  //     setState(
  //       data.docs.map((item) => {
  //         return { ...item.data() };
  //       })
  //     );

  //     getData();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const auth = getAuth(app);

  // function inputChangeHandler(event: OnChange) {
  //   const { name, value } = event.target;

  //   const inputName = name;
  //   const inputValue = value;

  //   const newInputField = { [inputName]: inputValue };

  //   setInputValues((prevState) => {
  //     return { ...prevState, ...newInputField };
  //   });
  // }

  // function formSubmitHandler(event: React.FormEvent) {
  //   event.preventDefault();

  //   const { Email, Password } = inputValues;

  //   signInWithEmailAndPassword(auth, Email, Password)
  //     .then((response) => {
  //       setState(response.user.email);
  //       alert("signed in");
  //     })
  //     .catch((error) => alert(error));
  // }

  return (
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

      <a className="login-form-links" href={loginPath}>
        Forgot Password ?
      </a>
      <p className="login-form-forget">
        Not a user ?
        <a className="login-form-links" href={registerPath} style={{ paddingLeft: ".25rem" }}>
          Register now
        </a>
      </p>
      <button className="login-form-btn" type="submit">
        LOGIN
      </button>
    </form>
  );
}
