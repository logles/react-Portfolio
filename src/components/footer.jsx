import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Lydia Ogles. All Rights Reserved.
      </p>
      <div className="footer__links">
        <a
          href="https://github.com/logles"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <span className="footer__icon">🔗</span> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lydiaogles/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <span className="footer__icon">🔗</span> LinkedIn
        </a>
        <a href="mailto:lydialogles@gmail.com" className="footer__link">
          <span className="footer__icon">🔗</span> Email Me
        </a>
      </div>
    </footer>
  );
}

export default Footer;
