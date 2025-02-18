import React from "react";
import Nav from "./nav";
import logo from "../assets/logo.png";

function Header({ setActiveSection }) {
  return (
    <header className="header">
      <h1 className="header__title">
        <img src={logo} alt="Logo" className="header__logo" /> Lydia's Portfolio
      </h1>
      <Nav setActiveSection={setActiveSection} />
    </header>
  );
}

export default Header;
