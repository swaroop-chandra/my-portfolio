import React from "react";
import "../css/Page1.css";

import AboutMe from "../pages/AboutMe";
import Introduction from "../pages/Introduction";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

function Page1() {
  return (
    <div className="page1_container">
      <AboutMe />
      <Introduction />
      <Skills />
      <Projects />
    </div>
  );
}

export default Page1;
