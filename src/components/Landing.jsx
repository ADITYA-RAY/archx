import React from "react";
import img0 from "../assets/img/build0.jpg";
import img1 from "../assets/img/build1.jpg";
import img2 from "../assets/img/build2.jpg";
import img3 from "../assets/img/build3.jpg";

import { useState, useEffect, useRef } from "react";
export const Landing = () => {
  const count0 = useRef(0);
  const count1 = useRef(0);
  const count2 = useRef(0);
  const count3 = useRef(0);

  useEffect(() => {
    let counter = 0;
    let counts = [count0, count1, count2, count3];
    let images = [img0, img1, img2, img3];
    for (var i = 0; i < 4; i++) {
      counts[i].current.style.opacity = 0;
      counts[0].current.style.opacity = 0.6;
    }

 
    const interval = setInterval(() => {
      
      let live = counts[counter];
      let next = counts[counter + 1];
      if(counter>2){
        counter=-1;
        for (var i = 0; i < 4; i++) {
          counts[i].current.style.opacity = 0;
          counts[0].current.style.opacity = 0.6;
        }    
      }else{
        live.current.style.opacity = 0;
        next.current.style.opacity = 0.6;
      }
     
      counter++;
    
    }, 12000);
  }, []);

  return (
    <div className="hero_cont">
      <div className="img_cont">
        <img src={img3} alt="" className="hero" ref={count3} />
        <img src={img2} alt="" className="hero" ref={count2} />
        <img src={img1} alt="" className="hero" ref={count1} />
        <img src={img0} alt="" className="hero" ref={count0} />
      </div>
      <div className="hero_txt_cont">
        <div className="hero_txt">Constructing Happiness.</div>
        <div className="hero_txt_light">
          Change the way you live life, closer to nature.
        </div>
      </div>
      <div className="works">
        <div className="works_inner">
          <div className="col">
            <div className="no">Nr. 01</div>
            <div className="title">Architect.</div>
            <div className="post_title"></div>
          </div>
          <div className="col">
            <div className="no">Nr. 02</div>
            <div className="title">Planner.</div>
            <div className="post_title"></div>
          </div>{" "}
          <div className="col">
            <div className="no">Nr. 03</div>
            <div className="title">Designer.</div>
            <div className="post_title"></div>
          </div>{" "}
          <div className="col">
            <div className="no">Nr. 04</div>
            <div className="title">Vastu Consoultant.</div>
            <div className="post_title"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
