import React from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar"
import Main from "../components/Main"
import SkillsGrid from "../components/SkillsGrid"

const Skills = () => {
  return (
    <div className="page">
      <div className="first__part__page">
        <LeftBar />
      </div>
      <div className="second__part__page">
        <header>
          <Header />
        </header>
        <main>
          <Main />
          <SkillsGrid />
        </main>
        <footer>
        </footer>
      </div>
    </div>
  );
};

export default Skills;