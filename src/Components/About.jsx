/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "../CSS/App.css";
import WorkSection from "./WorkSection";
import React from "react";

function About() {
  return (
    <div className="aboutSection" id="About">
      <div className="container">
        <div className="row">
          <div className="col-md-6 team-section imgSection">
            <div className="imgBorder">
              <img src="images/pexels-andrea-piacquadio-3799115.jpg" alt="" />
            </div>
            <br />
   
          </div>
          <div className="col-md-6 team-section BioSection">
            <h1>Bio</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              praesentium sint, incidunt aspernatur tempore, aperiam asperiores
              eos voluptates numquam unde cum molestias laborum! Excepturi earum
              exercitationem ratione at rerum perspiciatis praesentium, sed
              debitis libero? Eum, fuga eligendi amet accusantium consequatur
              voluptatum blanditiis nesciunt natus. Harum incidunt nam nobis,
              delectus magni
            </p>
          </div>

          <WorkSection />

          <div className="col-lg-12 download">
            <a href="MUHMMAD (1).pdf" download="Resume" className="downloadCV">
              Download MyCv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
