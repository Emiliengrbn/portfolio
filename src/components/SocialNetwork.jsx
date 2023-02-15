import React from "react";
const Linkedin = require ("../images/Linkedin_logo.png")
const Github = require ("../images/Github_logo.png")
const CV = require ("../images/cv.png")
const PageCV = require ("../images/CV_Emilien_Gerbouin.pdf")

const SocialNetwork = () => {
  return (
    <div>
        <ul className="wrapper">
            <a href="https://www.linkedin.com/in/emilien-gerbouin/" target="_blank" rel="noreferrer">
                <li className="icon linkedin">
                    <span className="tooltip">Linkedin</span>
                    <img src={Linkedin} alt="linkedin" className="linkedin__logo"/>
                </li>
            </a>
            <a href="https://github.com/Emiliengrbn" target="_blank" rel="noreferrer">
                <li className="icon github">
                    <span className="tooltip">Github</span>
                    <img src={Github} alt="github" className="github__logo"/>
                </li>
            </a>
            <a href={PageCV} target="_blank" rel="noreferrer">
                <li className="icon cv">
                    <span className="tooltip">CV</span>
                    <img src={CV} alt="cv"  className="cv__logo"/>
                </li>
            </a>
        </ul>
    </div>
  );
};

export default SocialNetwork;
