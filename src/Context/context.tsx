import React, { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { app, database } from "../firebase-config/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { OnChange } from "../Types/voting-candidate";
import { registerationData } from "../Pages/Registration/RegistrationForm/RegistrationForm";
import { EMAIL, PASSWORD } from "../constants/reg-input";

export type LoginCredentials = {
  [EMAIL]: string;
  [PASSWORD]: string;
};

export const initialInputValues: LoginCredentials = {
  [EMAIL]: "",
  [PASSWORD]: "",
};

export type ContextValues = {
  loggedInUserEmail: string;
  inputValues: LoginCredentials;
  docsData: registerationData;
  formSubmitHandler: (event: React.FormEvent) => void;
  inputChangeHandler: (event: OnChange) => void;
};

export type DocsData = registerationData;

// const docsData: DocsData = {
//   "Adhar Number": "",
//   Email: "",
//   Password: "",
//   "Re-enter Password": "",
//   Name: "",
//   "Date Of Birth": "",
//   "Father's/Mother's Name": "",
//   "Mobile No.": "",
// };

const docsData: any = {};

let loggedInUserEmail: string = "";

export const context = React.createContext<ContextValues>({
  loggedInUserEmail,
  docsData,
  inputValues: initialInputValues,
  formSubmitHandler: (event: React.FormEvent): void => {},
  inputChangeHandler: (event: OnChange): void => {},
});

export default function ContextProvider(props: { children: React.ReactElement }) {
  const [loggedInUserEmail, setLogginInUserEmail] = useState<string>("");

  const [inputValues, setInputValues] = useState<LoginCredentials>(initialInputValues);

  const [docsData, setDocsData] = useState<any>();

  const auth = getAuth(app);
  const dbInstance = collection(database, "users");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          setLogginInUserEmail(response.user.email);
          alert("signed in");
        }
      })
      .catch((error) => alert(error))
      .finally(() => {
        async function getData() {
          const data = await getDocs(dbInstance);
          console.log(data);
          // data.docs.forEach((item) => console.log(item));
        }

        getData();
      });
  }

  const providerValueProp: ContextValues = {
    loggedInUserEmail,
    docsData,
    inputValues,
    inputChangeHandler,
    formSubmitHandler,
  };

  return <context.Provider value={providerValueProp}>{props.children}</context.Provider>;
}
