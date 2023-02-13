import "./Steps.css";

import { HiOutlineClipboardCheck } from "react-icons/hi";
import { FaSignInAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FcKey } from "react-icons/fc";
import { FaVoteYea } from "react-icons/fa";

function Steps() {
  return (
    <div className="steps-container">
      <div className="step-center">
        <div className="steps-heading">
          <div className="steps-heading-txt">
            Follow these easy steps <div className="steps-heading-border"></div>
          </div>
        </div>
        <div className="steps-steps-container">
          <div className="steps-steps-img">
            <HiOutlineClipboardCheck />
          </div>
          <p>Register yourself by filing required informations</p>
        </div>

        <div className="steps-steps-container">
          <div className="steps-steps-img">
            <FaSignInAlt />
          </div>
          <p>Signin as user</p>
        </div>

        <div className="steps-steps-container">
          <div className="steps-steps-img">
            <MdDashboard />
          </div>
          <p>Go to vote options on dashboard</p>
        </div>

        <div className="steps-steps-container">
          <div className="steps-steps-img">
            <FcKey />
          </div>
          <p>Give security key</p>
        </div>

        <div className="steps-steps-container">
          <div className="steps-steps-img">
            <FaVoteYea />
          </div>
          <p>Vote your candidate and submit</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
