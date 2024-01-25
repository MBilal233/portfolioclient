import "../CSS/App.css";
import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";
function WorkSection() {
  const WorkSectionData = useContext(MyContext);
  console.log(WorkSectionData);
  return (
    <div className="col-lg-12  WorkSection">
      <div className="container-fluid">
        <div className="row">
          {WorkSectionData.map((data) => {
            return (
              <>
                <div className="col-5 col-sm-4 col-md-3 team-section">
                  <h1>{data.number}</h1>
                  <h5>{data.title}</h5>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
