import React from "react";

function Nav({ setActiveSection }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button
            className="nav__button"
            onClick={() => setActiveSection("aboutMe")}
          >
            About
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__button"
            onClick={() => setActiveSection("portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__button"
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__button"
            onClick={() => setActiveSection("resume")}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
