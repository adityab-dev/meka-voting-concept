import { personalInfoNavigation } from "../../../constants/Paths";
import { navLinksArray } from "../../../constants/user-nav-links";

import "../../../Pages/PersonalInfo/PersonalInfo.css";

export default function CommonHeader() {
  return (
    <>
      <header className="info-header">
        <ul className="user-header-list">
          {navLinksArray.map((link, index) => {
            return (
              <li className="user-header-navlink" key={link}>
                <a href={personalInfoNavigation[index]}>{link}</a>
              </li>
            );
          })}
          <button className="user-form-header-btn" type="button">
            Vote
          </button>
        </ul>
      </header>
    </>
  );
}
