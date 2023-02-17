import { inputNamesArray } from "../../../constants/reg-input";

import { useContext } from "react";
import registerationContext from "../../../Context/Register-Context/register-context";

export default function RegistrationForm() {
  const { registerFormSubmitHandler, registerInputChangeHandler, registrationData } =
    useContext(registerationContext);

  return (
    <form className="reg-form" onSubmit={registerFormSubmitHandler}>
      {inputNamesArray.map((name) => {
        const CURRENT_INPUT_VALUE = registrationData[name];

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
              onChange={registerInputChangeHandler}
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
