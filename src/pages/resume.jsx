import React from "react"; //? do i need this?
import resumePDF from "../assets/Resume.pdf";

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <p>Click below to download my resume in PDF format:</p>

      <a
        href={resumePDF}
        download="Lydia_Ogles_Resume.pdf"
        className="resume-button"
      >
        Download
      </a>
    </div>
  );
}

export default Resume;
