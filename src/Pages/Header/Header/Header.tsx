import lets_vote_img from "../../../Assets/lets-vote-img.jpg";
import { loginPath, registerPath } from "../../../constants/Paths";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <img className="header-left-img" src={lets_vote_img} alt="Let's Vote" />
      </div>

      <div className="header-right">
        <header className="header-right-header">
          <div className="header-right-header-center">
            <div>About</div>
            <div>Contact</div>
            <button type="button" className="header-right-header-btn">
              <a href={loginPath}>Login</a>
            </button>
          </div>
        </header>

        <main className="header-right-main">
          <p className="header-right-main-small-txt">Be a part of decision</p>
          <p className="header-right-main-big-txt">Vote Today</p>

          <button type="button" className="header-right-main-btns">
            <a href={registerPath}>REGISTER</a>
          </button>
          <button type="button" className="header-right-main-btns">
            READ MORE
          </button>
        </main>
      </div>
    </div>
  );
}

export default Header;
