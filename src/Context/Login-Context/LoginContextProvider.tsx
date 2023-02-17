import React, { useState } from "react";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { app, database } from "../../firebase-config/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { OnChange } from "../../Types/voting-candidate";

import context, { LoginContextValues } from "./login-context";

import { docsData, initialLoginInputValues } from "../../constants/init_constants";

import { registerationData, LoginCredentials } from "../../Types/Types";
import { EMAIL } from "../../constants/reg-input";

const initialDocsData = docsData;

export default function ContextProvider(props: { children: React.ReactElement }) {
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

    console.log("inside login-context");

    const { Email, Password } = inputValues;

    signInWithEmailAndPassword(auth, Email, Password)
      .then((response) => {
        if (typeof response.user.email === "string") {
          loggedInUserEmail = response.user.email;
          alert("signed in");
          setInputValues(initialLoginInputValues);
        }
      })
      .catch((error) => alert(error))
      .finally(() => {
        if (!loggedInUserEmail) {
          setInputValues(initialLoginInputValues);
          return;
        }

        async function getData() {
          const emailQuery = query(dbInstance, where([EMAIL].toString(), "==", loggedInUserEmail));

          console.log("before snapshot");

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

  return <context.Provider value={providerValueProp}>{props.children}</context.Provider>;
}
