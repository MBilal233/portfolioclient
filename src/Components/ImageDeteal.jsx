/* eslint-disable react/prop-types */
import "../CSS/App.css";
import React from "react";
import { useDispatch } from "react-redux";
import { hide } from "../Store/Slices/slice";
import { useSelector } from "react-redux";
import { NavHashLink as Navlink } from "react-router-hash-link";

export default function ImageDeteal({ Img }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.detail);
  console.log(state);

  const HideTheBox = (value) => {
    dispatch(hide(value));
  };

  return (
    <div
      className="imgDeteal"
      style={state === "show" ? {transform:"scale(1,1)"} : { transform:"scale(0,0)"}}
    >
      <div className="container">
        <div className="cancelBtn" onClick={() => HideTheBox("hide")}>
          <Navlink className="navlink" to="#Projects">
            <i className="fa-solid fa-xmark"></i>
          </Navlink>
        </div>
        <div className="row">
          <div className="col-lg-6 image">
            <img src={Img} alt="" />
          </div>
          <div className="col-lg-6 content">
            <div className="detailparagrapgh">
              <h1 className="projectHeading">Project 1</h1>
              <p className="detealparagragh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                vitae alias eligendi vel similique incidunt ducimus error
                explicabo facere dicta aut possimus qui, voluptatum autem cum
                repellat nesciunt ratione aliquam. Doloremque eaque vel
                laudantium quo sed, accusamus obcaecati reiciendis ab vitae,
                quos nulla, nisi voluptatum corrupti rem labore beatae odit
                repellendus quam nam autem magnam illum animi pariatur hic.
              </p>
            </div>

            <div className="info">
              <div className=" team-section client">
                <h2>client:</h2>
                <p>Michal Jonsan</p>
              </div>
              <div className=" team-section tech">
                <h2>Technologies:</h2>
                <p>HTML ,</p>
                <p>CSS ,</p>
                <p>JAVASCRIPT ,</p>
                <p>REACT ,</p>
              </div>
              <div className=" team-section industry">
                <h2>Industry:</h2>
                <p>Art&Design</p>
              </div>
              <div className=" team-section date">
                <h2>Date:</h2>
                <p>July 16, 2019</p>
              </div>
              <div className=" team-section url">
                <h2>URL:</h2>
                <a href="#">www.example.com</a>
              </div>
              <div className=" team-section share">
                <h2>Share:</h2>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-google-plus"></i>
                <i className="fa-brands fa-square-instagram"></i>
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
