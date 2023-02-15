import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";

const LeftBar = () => {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
    <div className={`${showLinks ? "show-leftbar" : ""}`}>
        <div className="leftbar">
            <div className="first__part__leftbar">
                <h1 className="logo__leftbar slideInDown-1">E.G</h1>
                <h2 className="title__leftbar slideInDown-2">Emilien</h2>
                <h3 className="subtitle__leftbar slideInDown-3">Développeur web</h3>
            </div>
            <div className="second__part__leftbar">
                <ul className="list__leftbar">
                    <li className="content__list__leftbar slideInDown-4">
                        <Link to={"/"} className="leftbar__link">
                        <div className="button__projets">
                            <div className="box__projets">P</div>
                            <div className="box__projets">R</div>
                            <div className="box__projets">O</div>
                            <div className="box__projets">J</div>
                            <div className="box__projets">E</div>
                            <div className="box__projets">T</div>
                            <div className="box__projets">S</div>
                        </div>
                        </Link>
                    </li>
                    <li className="content__list__leftbar slideInDown-5">
                        <Link to={"/skills"} className="leftbar__link">
                            <div className="button__competences">
                                <div className="box__competences">C</div>
                                <div className="box__competences">O</div>
                                <div className="box__competences">M</div>
                                <div className="box__competences">P</div>
                                <div className="box__competences">E</div>
                                <div className="box__competences">T</div>
                                <div className="box__competences">E</div>
                                <div className="box__competences">N</div>
                                <div className="box__competences">C</div>
                                <div className="box__competences">E</div>
                                <div className="box__competences">S</div>
                            </div>
                        </Link>
                    </li>
                    <li className="content__list__leftbar slideInDown-6">
                        <Link to={"/about"} className="leftbar__link">
                        <div className="button__about">
                            <div className="box__about">À</div>
                            <div className="box__about">P</div>
                            <div className="box__about">R</div>
                            <div className="box__about">O</div>
                            <div className="box__about">P</div>
                            <div className="box__about">O</div>
                            <div className="box__about">S</div>
                        </div>
                        </Link>
                    </li>
                    <li className="content__list__leftbar slideInDown-7">
                        <Link to={"/contact"} className="leftbar__link">
                        <div className="button__contact">
                            <div className="box__contact">C</div>
                            <div className="box__contact">O</div>
                            <div className="box__contact">N</div>
                            <div className="box__contact">T</div>
                            <div className="box__contact">A</div>
                            <div className="box__contact">C</div>
                            <div className="box__contact">T</div>
                        </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="third__part__leftbar slideInDown-8">
                <SocialNetwork />
            </div>
        </div>
        <button className="leftbar__burger" onClick={handleShowLinks}>
            <span className="burger-bar" />
        </button>
    </div>
  );
};

export default LeftBar;