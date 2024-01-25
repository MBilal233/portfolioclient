/* eslint-disable no-unused-vars */
import "../src/CSS/App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import React, { createContext, useContext, useState } from "react";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/contact";
const MyContext = createContext();
const ProjectContext = createContext();
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state.detail);
  console.log(state)

  const WorkSection = [
    { number: "7+", title: "Experience" },
    { number: "25+", title: "Happy Clients" },
    { number: "20+", title: "Projects Done" },
    { number: "5+", title: "Get Award" },
  ];

  // Skills
  const skills = [
    {
      skillicon: <i className="fa-brands fa-html5"></i>,
      skillname: "HTML",
      color: "#E65100",
    },
    {
      skillicon: <i className="fa-brands fa-css3-alt"></i>,
      skillname: "CSS",
      color: "#0277BD",
    },
    {
      skillicon: <i className="fa-brands fa-js"></i>,
      skillname: "JavaScript",
      color: "#FFD600",
    },
    {
      skillicon: <i className="fa-brands fa-bootstrap"></i>,
      skillname: "Bootstrap",
      color: "#673AB7",
    },
    {
      skillicon: <i className="fa-brands fa-react"></i>,
      skillname: "React",
      color: "#80DEEA",
    },
    {
      skillicon: <i className="fa-brands fa-sass"></i>,
      skillname: "Sass",
      color: "#F06292",
    },

    {
      skillicon: <i className="fa-brands fa-node-js"></i>,
      skillname: "Node js",
      color: "#388E3C",
    },
    {
      skillicon: <i className="fa-solid fa-database"></i>,
      skillname: "mongoDB",
      color: "#81C784",
    },
  ];

  // project images

  const projects = [
    {
      id: 1,
      img: "images/creativeStudio.png",
    },
    {
      id: 2,
      img: "images/UniverstiesData.png",
    },
    {
      id: 3,
      img: "images/car-clean.png",
    },
    {
      id: 4,
      img: "images/activeBox.png",
    },
    {
      id: 5,
      img: "images/Matrimonial-Website.png",
    },
    {
      id: 6,
      img: "images/coming-soon.png",
    },
  ];

  return (
    <div style={state === 'show' ? {overflowY:"hidden",width:"100vw",height:"100vh"} : {overflowY:"scroll",overflowX:"hidden"}}>
      <Navbar />
      <Home />
      <MyContext.Provider value={WorkSection}>
        <About />
      </MyContext.Provider>
      <Skills skills={skills} />
      <ProjectContext.Provider value={projects}>
        <Projects />
      </ProjectContext.Provider>
      <Contact />
    </div>
  );
}

export default App;
export { MyContext, ProjectContext };
