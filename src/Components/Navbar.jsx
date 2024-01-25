/* eslint-disable react/prop-types */
import "../CSS/App.css";
import { useState } from "react";
import { NavHashLink as Navlink } from "react-router-hash-link";
import { useEffect } from "react";

function Navbar() {
  const [classState, setclassState] = useState("hide");
  const ShowHideMenu = () => {
    if (classState === "show") {
      setclassState("hide");
      console.log("menu show");
    }
    if (classState === "hide") {
      setclassState("show");
      console.log("menu hide");
    }
  };

  const [scroly, Setscrolly] = useState(0);
  const handleScroll = () => {
    Setscrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
      className="navbar"
      style={
        scroly > 200
          ? {
              position: "fixed",
              backgroundColor: "black",
              transition: "all 0.5s",
              transitionTimingFunction: "ease-out",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }
          : { position: "absolute", border: "none" }
      }
    >
      <div className="logo">
        <h3>
          <span className="port">Port</span>
          <span className="folio">folio</span>
        </h3>
      </div>

      <div className="linkSection">
        <ul style={classState === "show" ? { left: "0" } : { left: "-1000px" }}>
          <div className="xmarkParent" onClick={ShowHideMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <li>
            <Navlink
              onClick={() => setclassState("hide")}
              className=" navlink "
              to="#"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
            >
              Home
            </Navlink>
          </li>
          <li>
            <Navlink
              onClick={() => setclassState("hide")}
              className="navlink"
              to="#About"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
            >
              About
            </Navlink>
          </li>
          <li>
            <Navlink
              onClick={() => setclassState("hide")}
              className="navlink"
              to="#skills"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
            >
              Skills
            </Navlink>
          </li>
          <li>
            <Navlink
              onClick={() => setclassState("hide")}
              className="navlink"
              to="#Projects"
            >
              Projects
            </Navlink>
          </li>
          <li>
            <Navlink
              onClick={() => setclassState("hide")}
              className="navlink"
              to="#Contacts"
            >
              Contact
            </Navlink>
          </li>
          <li></li>
        </ul>
      </div>



      <div className="iconsSection">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-solid fa-globe"></i>
      </div>

      <div className="humberSection" onClick={ShowHideMenu}>
        <div
          className="line1 line"
          style={
            classState === "show"
              ? { alignSelf: "flex-end" }
              : { alignSelf: "flex-start" }
          }
        ></div>
        <div className="line2 line"></div>
        <div
          className="line3 line"
          style={
            classState === "show"
              ? { alignSelf: "flex-start" }
              : { alignSelf: "flex-end" }
          }
        ></div>
      </div>
    </div>
  );
}

export default Navbar;
