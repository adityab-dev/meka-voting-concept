import { personalInfoNavigation, votingPath, adminInfoNavigation } from "../../../constants/Paths";
import { navLinksArray } from "../../../constants/user-nav-links";

import { Link, useNavigate } from "react-router-dom";

import "../../../Pages/PersonalInfo/PersonalInfo.css";

import login_context from "../../../Context/Login-Context/login-context";
import { useContext } from "react";

export default function CommonHeader() {
  const {
    docsData: { Name },
  } = useContext(login_context);

  let navigation: string[] = [];

  if (Name === "ADMIN") navigation = adminInfoNavigation;
  else navigation = personalInfoNavigation;

  const navigate = useNavigate();

  return (
    <>
      <header className="info-header">
        <ul className="user-header-list">
          {navLinksArray.map((link, index) => {
            return (
              <li className="user-header-navlink" key={link}>
                <Link to={navigation[index]}>{link}</Link>
              </li>
            );
          })}
          <button
            className={`user-form-header-btn ${
              Name === "ADMIN" ? "user-form-header-btn-not-allowed" : ""
            }`}
            type="button"
            onClick={() => navigate(votingPath)}
            disabled={Name === "ADMIN"}
          >
            Vote
          </button>
        </ul>
      </header>
    </>
  );
}
