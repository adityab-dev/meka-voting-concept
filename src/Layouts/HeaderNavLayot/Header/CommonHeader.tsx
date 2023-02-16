import { personalInfoNavigation, votingPath } from "../../../constants/Paths";
import { navLinksArray } from "../../../constants/user-nav-links";

import { Link, useNavigate } from "react-router-dom";

import "../../../Pages/PersonalInfo/PersonalInfo.css";

export default function CommonHeader() {
  const navigate = useNavigate();

  return (
    <>
      <header className="info-header">
        <ul className="user-header-list">
          {navLinksArray.map((link, index) => {
            return (
              <li className="user-header-navlink" key={link}>
                <Link to={personalInfoNavigation[index]}>{link}</Link>
              </li>
            );
          })}
          <button
            className="user-form-header-btn"
            type="button"
            onClick={() => navigate(votingPath)}
          >
            Vote
          </button>
        </ul>
      </header>
    </>
  );
}
