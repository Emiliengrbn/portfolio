import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="main__content">
      <div className="navbar">
        <NavLink to={"/"} className={(nav) => (nav.isActive ? "nav-active" : "link__navbar")}>
          <p className="navbar__content">PROJETS</p>
        </NavLink>
        <NavLink to={"/skills"} className={(nav) => (nav.isActive ? "nav-active " : "link__navbar")}>
          <p className="navbar__content">COMPETENCES</p>
        </NavLink>
        <NavLink to={"/about"} className={(nav) => (nav.isActive ? "nav-active " : "link__navbar")}>
          <p className="navbar__content" >À PROPOS</p>
        </NavLink>
        <NavLink to={"/contact"} className={(nav) => (nav.isActive ? "nav-active " : "link__navbar")}>
          <p className="navbar__content" >CONTACT</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Main;