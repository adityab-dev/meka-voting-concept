import React, { useState } from "react";

import { collection, query, where, onSnapshot } from "firebase/firestore";

import { app, database } from "../../firebase-config/firebase-config";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import loginContext, { LoginContextValues } from "./login-context";

import { docsData, initialLoginInputValues } from "../../constants/init_constants";

import { EMAIL } from "../../constants/reg-input";

import { OnChange } from "../../Types/voting-candidate";

import { registerationData, LoginCredentials } from "../../Types/Types";

const initialDocsData = docsData;

function LoginContextProvider(props: { children: React.ReactElement }) {
  const [inputValues, setInputValues] = useState<LoginCredentials>(initialLoginInputValues);

  const [docsData, setDocsData] = useState<registerationData>(initialDocsData);

  let loggedInUserEmail: string = "";

  const auth = getAuth(app);
  const dbInstance = collection(database, "users");

  function setDocsStateHandler(newDocsState: registerationData) {
    setDocsData(newDocsState);
  }

  function inputChangeHandler(event: OnChange) {
    const { name, value } = event.target;

    const inputName = name;
    const inputValue = value;

    const newInputField = { [inputName]: inputValue };

    setInputValues((prevState) => {
      return { ...prevState, ...newInputField };
    });
  }

  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();

    const { Email, Password } = inputValues;

    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        loggedInUserEmail = Email;
        setInputValues(initialLoginInputValues);
      })
      .catch((error) => alert(error))
      .finally(() => {
        if (!loggedInUserEmail) {
          setInputValues(initialLoginInputValues);
          return;
        }

        async function getData() {
          const emailQuery = query(dbInstance, where([EMAIL].toString(), "==", loggedInUserEmail));

          onSnapshot(emailQuery, (data) => {
            setDocsData(data.docs[0].data() as registerationData);
          });
        }

        getData();
      });
  }

  const providerValueProp: LoginContextValues = {
    docsData,
    inputValues,
    inputChangeHandler,
    formSubmitHandler,
    setDocsStateHandler,
  };

  return <loginContext.Provider value={providerValueProp}>{props.children}</loginContext.Provider>;
}

export default LoginContextProvider;
