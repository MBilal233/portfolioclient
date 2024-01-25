import { useRef } from "react";
import "../CSS/App.css";
import Typed from "typed.js";
import { useEffect } from "react";
import { ChevronsDown } from "lucide-react";
import { NavHashLink as Navlink } from "react-router-hash-link";

function Home() {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["I'm Muhammad Bilal", "I'm a react js developer"],
      typeSpeed: 50,
      shuffle: false,
      typeSpeed: 150,
      startDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });
  return (
    <>
   
    <header className="homeSection">
      <h1 className="welcome">Welcome</h1>
      <div className="typed">
        <h1 ref={element}></h1>
      </div>
      <button className="btn">
        <Navlink className="navlink" to="#Contacts">
          Hire me
        </Navlink>
      </button>
      <button className="arrowparent">
        <Navlink className="navlink" to="#About">
          <ChevronsDown color="white" size={30} className="arrowbtn" />
        </Navlink>
      </button>
    </header>

    </>
  );
}

export default Home;
