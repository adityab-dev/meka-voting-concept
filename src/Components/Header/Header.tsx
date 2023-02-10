import lets_vote_img from "../../Assets/lets-vote-img.jpg";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <img
          className="header-left-img"
          src={lets_vote_img}
          alt="Let's Vote"
        />
      </div>

      <div className="header-right">
        <header className="header-right-header">
          <div className="header-right-header-center">
            <a href="./">About</a>
            <a href="./">Contact</a>
            <button
              type="button"
              onClick={undefined}
              className="header-right-header-btn"
            >
              Login
            </button>
          </div>
        </header>

        <main className="header-right-main">
          <p className="header-right-main-small-txt">Be a part of decision</p>
          <p className="header-right-main-big-txt">Vote Today</p>

          <button
            type="button"
            onClick={undefined}
            className="header-right-main-btns"
          >
            REGISTER
          </button>
          <button
            type="button"
            onClick={undefined}
            className="header-right-main-btns"
          >
            READ MORE
          </button>
        </main>
      </div>
    </div>
  );
}

export default Header;
