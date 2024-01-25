/* eslint-disable react/prop-types */
import "../CSS/App.css";
import React from "react";

function Skills({ skills }) {
  return (
    <div id="skills">
      <div className="container">
        <div className="row">
          <h1 className="skillHeading">Skills</h1>
          {skills.map((elements) => {
            return (
              <>
                <div className=" col-4 col-sm-4 col-md-3 skill-team">
                  <div className="skillIcon" style={{color:elements.color}}>{elements.skillicon}</div>
                  <div className="skillName">{elements.skillname}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
