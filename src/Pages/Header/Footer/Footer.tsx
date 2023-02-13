import "./Footer.css";

import { FaTelegramPlane } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-left">
        <div className="footer-left-padding">
          <section>
            <div className="footer-left-headings">Contact</div>
            <div>1800 900 32</div>
            <div>1800 900 64</div>
          </section>

          <section>
            <div className="footer-left-headings">Helpline Number</div>
            <div>9090 1234 46</div>
            <div>9090 1234 47</div>
          </section>

          <section>
            <div className="footer-left-headings">Email:</div>
            <div>complaint@electionIndia.gov.in</div>
            <div>info@electionIndia.gov.in</div>
          </section>
        </div>
      </section>

      <hr />

      <section className="footer-mid">
        <div className="padding-top">
          <section>
            <div className="footer-left-headings">GetIN</div>
            <div>Register</div>
            <div>Login</div>
          </section>

          <section>
            <div className="footer-left-headings">Know more</div>
            <div>Features</div>
            <div>About</div>
            <div>Steps</div>
          </section>

          <section>
            <div className="footer-left-headings">Follow us</div>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Twitter</div>
          </section>
        </div>

        <section>
          <div className="footer-mid-imgs">
            <AiFillTwitterCircle />
            <AiFillFacebook />
            <AiFillInstagram />
          </div>
        </section>
      </section>

      <hr />

      <section className="footer-right">
          <div className="footer-right-heading">Quick Feedback</div>
          <input />
          <textarea
            name=""
            id=""
            cols={10}
            rows={10}
          ></textarea>
          <button type="button">
            <FaTelegramPlane />
            Submit
          </button>
      </section>
    </div>
  );
}

export default Footer;
