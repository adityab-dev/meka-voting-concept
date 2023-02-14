import "./Registration.css";

import voting from "../../Assets/voting-img.png";

import RegistrationForm from "./RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className="reg-container">
      <img className="reg-img" src={voting} alt="Please Vote" />

      <section className="reg-form-container">
        <h1 className="reg-heading">Registration Form</h1>
        <RegistrationForm />
      </section>
    </div>
  );
}
