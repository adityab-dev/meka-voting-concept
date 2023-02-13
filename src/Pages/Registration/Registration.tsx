import "./Registration.css";

import voting from "../../Assets/voting-img.jpg";

import { inputNamesArray } from "../../constants/reg-input";

export default function RegistrationPage() {
  return (
    <div className="reg-container">
      <img className="reg-img" src={voting} alt="Please Vote" />

      <section className="reg-form-container">
        <h1 className="reg-heading">Registration Form</h1>

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
      </section>
    </div>
  );
}
