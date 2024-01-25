import "../CSS/App.css";
import React, { useState } from "react";
import { useContext } from "react";
import { ProjectContext } from "../App";
import ImageDeteal from "./ImageDeteal";
import { useDispatch } from "react-redux";
import { show } from "../Store/Slices/slice";
function ProjectsImages() {
  const dispatch = useDispatch();
  const Projects = useContext(ProjectContext);
  const [Img, setImg] = useState();
  const ImgHandler = (img) => {
    setImg(img);
    dispatch(show("show"));
  };

  return (
    <>
      <ImageDeteal Img={Img} />

      <div className="container">
        <div className="row">
          {Projects.map((elements) => {
            return (
              <>
                <div className="col-md-4 col-sm-6  images">
                  <div className="imgparent">
                    <img src={elements.img} alt="" />
                    <div className="imgHover">
                      <button
                        className="detailBtn"
                        onClick={() => ImgHandler(elements.img)}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsImages;
