import React from "react";
import pjain from "../assets/img/pjain.jpg";

export const About = () => {
  return (
    <div className="about_cont">
        <div className="">
          <div className="img_cont">
            <img src={pjain} alt="" srcset="" />
          </div>
        </div>
        <div className="">
          <br /> <br />
          <div className="s1">ABOUT.</div>
          <br />
          <div className="s2">
            Ark-Shelters are prefabricated, fully finished, modular units. By a
            lake, deep in a forest, at the edge of a field, a steep mountain
            hill or your city rooftop! Make your dream come true, installed in
            one day, no extra on-site work.
          </div>
          <br />
          <br />
          <div className="two_col">
            <div>
              We have ideal conditions and are able to reach the highest details
              and reduce production time. Which allows us to keep control of the
              price, remove any onsite construction constraints and make your
              dream home, on time, on budget, at the highest quality possible.
            </div>
            <div>
              We have ideal conditions and are able to reach the highest details
              and reduce production time. Which allows us to keep control of the
              price, remove any onsite construction constraints and make your
              dream home, on time, on budget, at the highest quality possible.
            </div>
          </div>
        </div>
    </div>
  );
};
