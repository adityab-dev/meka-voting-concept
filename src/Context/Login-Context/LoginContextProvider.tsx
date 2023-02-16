import React, { useState } from "react";

import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { app, database } from "../../firebase-config/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { OnChange } from "../../Types/voting-candidate";

import context, {
  LoginContextValues,
  initialInputValues,
  DocsData,
  docsData,
} from "./login-context";

import { registerationData, LoginCredentials } from "../../Types/Types";

const initialDocsData = docsData;

export default function ContextProvider(props: { children: React.ReactElement }) {
  const [inputValues, setInputValues] = useState<LoginCredentials>(initialInputValues);

  const [docsData, setDocsData] = useState<DocsData>(initialDocsData);

  let loggedInUserEmail: string = "";

  const auth = getAuth(app);
  const dbInstance = collection(database, "users");

  function setDocsStateHandler(newDocsState: DocsData) {
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
      .then((response) => {
        if (typeof response.user.email === "string") {
          loggedInUserEmail = response.user.email;
          alert("signed in");
          setInputValues(initialInputValues);
        }
      })
      .catch((error) => alert(error))
      .finally(() => {
        if (!loggedInUserEmail) {
          setInputValues(initialInputValues);
          return;
        }

        async function getData() {
          const data = await getDocs(dbInstance);

          const loggedInUserInfoArray = data.docs.filter((userInfo) => {
            let userInfoObj = userInfo.data();

            if (userInfoObj.Email === loggedInUserEmail) {
              return { ...userInfo, userID: userInfo.id };
            }
            return null;
          });

          const [loggedInUserInfoObj] = loggedInUserInfoArray;

          const userID = loggedInUserInfoObj.id;

          const loggedInUserInfo = {
            ...loggedInUserInfoObj.data(),
            userID: loggedInUserInfoObj.id,
          } as registerationData;

          setDocsData(loggedInUserInfo);

          const dataToUpdate = doc(database, "users", userID);

          updateDoc(dataToUpdate, loggedInUserInfo).catch((error) => alert(error));
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
