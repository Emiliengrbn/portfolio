import React from "react";
import {Link} from "react-router-dom";
const PictureOfMe = require("../images/photo_cv.jpg")
const Certification = require ("../images/certification.png")

const Header = () => {
  return (
    <div className="header__content">
        <div className="first__part__header">
            <img src={PictureOfMe} alt="head of Emilien Gerbouin" className="picture__of__me" />
        </div>
        <div className="second__part__header">
          <div className="name__and__contact">

            <h1 className="account__name">Emilien Gerbouin</h1>
            <img src={Certification} alt="certification" className="certification" />
            <Link to="/contact">
              <button className="send__button">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                  </div>
                </div>
                <span>Contacter</span>
              </button>
            </Link>
          </div>
            <p className="presentation">
              Développeur Front-end diplômé du parcours "Développeur web" d'Openclassrooms <br />
              Passionné de développement web, en quête de la meilleure expérience client possible
            </p>
        </div>
    </div>
  );
};

export default Header;