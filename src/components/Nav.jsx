import React from "react";
import logo from "../assets/img/logo.png";
import { useEffect } from "react";
import { About } from "./About.jsx";
import { Projects } from "./Projects.jsx";
import { Slides } from "./Slides.jsx";
import { Testimonials } from "./Testimonials.jsx";
import { Contact } from "./Contact.jsx";
import { Link } from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi"
export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["nav_cont"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  const link = [
    { link: "About", src: "./About" },
    { link: "Work", src: <Projects /> },
    { link: "Gallery", src: <Slides /> },
    { link: "Testimonials", src: <Testimonials /> },
  ];
  return (
    <div className={navbarClasses.join(" ")}>
      <div className="logo">
        <img src={logo} alt="" srcset="" /> <br />
        <span className="logotxt">NALINI ASSOCIATES</span>
      </div>
      <div className="center_nav">
        {link.map((data) => (
          <div className="link">
            <a href={data.src}>{data.link}</a>
          </div>
        ))}
      </div>
      <div className="corner_nav">
        <div className="large">Contact</div>
        <div className="burger"><BiMenuAltRight/></div>
      </div>
    </div>
  );
};
