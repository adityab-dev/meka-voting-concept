import "./Footer.css";

import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div>
          <div>Contact</div>
          <div>1800 900 32</div>
          <div>1800 900 64</div>
        </div>

        <div>
          <div>Helpline Number</div>
          <div>9090 1234 46</div>
          <div>9090 1234 47</div>
        </div>

        <div>
          <div>Email:</div>
          <div>complaint@electionIndia.gov.in</div>
          <div>info@electionIndia.gov.in</div>
        </div>
      </div>

      <div className="footer-mid">
        <div>
          <div>GetIN</div>
          <div>Register</div>
          <div>Login</div>
        </div>

        <div>
          <div>Know more</div>
          <div>Features</div>
          <div>About</div>
          <div>Steps</div>
        </div>

        <div>
          <div>Follow us</div>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Twitter</div>
        </div>
      </div>

      <div className="footer-right">
        <div>Quick Feedback</div>
        <input />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
        <button type="button">
          <FaTelegramPlane />
          Submit
        </button>
      </div>
    </div>
  );
}

export default Footer;
