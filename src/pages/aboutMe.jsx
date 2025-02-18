import React from "react";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import gitIcon from "../assets/git.svg";
import apiIcon from "../assets/api.png";
import avatar from "../assets/avatar.png";
import typeScript from "../assets/type.jpg";

function AboutMe() {
  const languageIcons = [
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: jsIcon, alt: "JavaScript" },
    { src: reactIcon, alt: "React" },
    { src: gitIcon, alt: "Git" },
    { src: apiIcon, alt: "API" },
    { src: typeScript, alt: "TypeScript" },
  ];

  return (
    <div className="about-me">
      <div className="about-me-content">
        <img src={avatar} alt="Lydia Ogles" className="avatar-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, my name is Lydia, and I am passionate about creating exceptional
            website experiences and strategies. Over the past six years, I have
            driven strategic changes across 30,000+ web pages while managing 30
            simultaneous A/B tests to ensure a forward-thinking, user-focused
            website evolution in a bug-free environment. My key projects
            include:
          </p>
          <ul>
            <li>
              CMS migration (DMP to Acquia) and full website redesign (2019)
            </li>
            <li>Company rebrand and additional website redesign (2020)</li>
            <li>eCommerce website build (2022)</li>
            <li>
              Introduction of eCommerce into the core lead generation website
              (2023–current)
            </li>
          </ul>
          <p>
            Recently, I expanded my skill set through the University of Utah
            Full Stack Coding Bootcamp, deepening my understanding of how to
            leverage technology to meet users' needs effectively. I'm excited to
            continue building user-focused digital experiences that drive
            results and innovation.
          </p>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider">
          {languageIcons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="language-icon"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
