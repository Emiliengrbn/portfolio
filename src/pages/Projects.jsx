import React from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar"
import Main from "../components/Main"
import ProjectsGrid from "../components/ProjectGrid"

const Projects = () => {
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
          <ProjectsGrid />
        </main>
        <footer>
        </footer>
      </div>
    </div>
  );
};

export default Projects;