import { inputNamesArray } from "../../../constants/reg-input";

export default function RegistrationForm() {
  return (
    <form className="reg-form">
      {inputNamesArray.map((name) => {
        return (
          <div className="reg-form-inputs-labels">
            <label htmlFor={name} className="reg-labels">
              {name}
            </label>
            <input className="reg-inputs" type="text" id={name} />
          </div>
        );
      })}
      <button className="reg-form-btn" type="submit">
        SUBMIT
      </button>
    </form>
  );
}
