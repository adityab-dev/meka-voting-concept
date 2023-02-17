import registerationContext from "./register-context";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterationContextType, registerationData } from "../../Types/Types";
import { initialRegisterValues } from "../../constants/init_constants";
import { OnChange } from "../../Types/voting-candidate";

import { collection, doc, setDoc } from "firebase/firestore";
import { database } from "../../firebase-config/firebase-config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import login_context from "../Login-Context/login-context";
import { loginPath } from "../../constants/Paths";

export default function RegisterContextProvider(props: { children: React.ReactElement }) {
  const { setDocsStateHandler } = useContext(login_context);

  const [registrationData, setRegistrationData] =
    useState<registerationData>(initialRegisterValues);

  const navigate = useNavigate();

  const auth = getAuth();

  const dbInstance = collection(database, "users");

  function registerInputChangeHandler(event: OnChange) {
    const { name, value } = event.target;

    const key = name;
    const property = value;

    const newInputField = { [key]: property };

    setRegistrationData((prevState) => {
      return { ...prevState, ...newInputField };
    });
  }

  function registerFormSubmitHandler(event: React.FormEvent) {
    event.preventDefault();

    const { Email, Password, Name } = registrationData;

    createUserWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        setDoc(doc(dbInstance, Name), registrationData);
      })
      .then(() => {
        setDocsStateHandler(registrationData);
        setRegistrationData(initialRegisterValues);
        alert("Account created");
        navigate(loginPath);
      })
      .catch((error) => alert(error));
  }

  const registerationValueProps: RegisterationContextType = {
    registrationData,
    registerInputChangeHandler,
    registerFormSubmitHandler,
  };

  return (
    <registerationContext.Provider value={registerationValueProps}>
      {props.children}
    </registerationContext.Provider>
  );
}
