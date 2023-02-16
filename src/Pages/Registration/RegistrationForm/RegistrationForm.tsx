import { inputNamesArray } from "../../../constants/reg-input";

import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";

import { OnChange } from "../../../Types/voting-candidate";
import { database } from "../../../firebase-config/firebase-config";

import { registerationData } from "../../../Types/Types";

import { initialRegisterValues } from "../../../constants/init_constants";

export default function RegistrationForm() {
  const [registerData, setRegisterData] = useState<registerationData>(initialRegisterValues);

  // TODO: using registrationData instead of any causes issue.
  const [docsData, setDocsData] = useState<any>();

  const auth = getAuth();

  const dbInstance = collection(database, "users");

  function inputChangeHandler(event: OnChange) {
    const { name, value } = event.target;

    const key = name;
    const property = value;

    const newInputField = { [key]: property };

    setRegisterData((prevState) => {
      return { ...prevState, ...newInputField };
    });
  }

  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();

    const { Email, Password } = registerData;

    createUserWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        addDoc(dbInstance, registerData);
        setRegisterData(initialRegisterValues);

        alert("Account created");
      })
      .then(() => getDocs(dbInstance))
      .then((docs) =>
        setDocsData(
          docs.docs.map((item) => {
            return { ...item.data() };
          })
        )
      )
      .catch((error) => alert(error));
  }

  return (
    <form className="reg-form" onSubmit={formSubmitHandler}>
      {inputNamesArray.map((name) => {
        const CURRENT_INPUT_VALUE = registerData[name];

        return (
          <div key={name} className="reg-form-inputs-labels">
            <label htmlFor={name} className="reg-labels">
              {name}
            </label>
            <input
              className="reg-inputs"
              type="text"
              id={name}
              name={name}
              onChange={inputChangeHandler}
              value={CURRENT_INPUT_VALUE}
            />
          </div>
        );
      })}

      <button className="reg-form-btn" type="submit">
        SUBMIT
      </button>
    </form>
  );
}
