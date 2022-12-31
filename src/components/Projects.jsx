import React from "react";
import s1 from "../assets/images/1.jpg";
import s35 from "../assets/images/35.jpg";
import s3 from "../assets/images/3.jpg";
import s4 from "../assets/images/4.jpg";
import s33 from "../assets/images/33.jpg";
import s6 from "../assets/images/6.jpg";
import s30 from "../assets/images/30.jpg";
import s8 from "../assets/images/8.jpg";
import s9 from "../assets/images/9.jpg";
import s10 from "../assets/images/10.jpg";
import s11 from "../assets/images/11.jpg";
import s20 from "../assets/images/20.jpg";
import rep from "../assets/img/rep.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";

export const Projects = () => {
  const data = [
    { src: s1, desc: "House at Bhilai", class: "" },
    { src: s3, desc: "House at Raipur", class: "" },
    { src: s4, desc: "Office at Durg", class: "" },
    { src: s6, desc: "House at Bhilai", class: "" },
    { src: s8, desc: "House at Bhilai", class: "" },
    { src: s9, desc: "House at Bhilai", class: "" },
    { src: s11, desc: "House at Bhilai", class: "" },
    { src: s20, desc: "House at Bhilai", class: "" },
    { src: s10, desc: "House at Bhilai", class: "big" },
    { src: s30, desc: "House at Bhilai", class: "" },
    { src: s33, desc: "House at Bhilai", class: "" },
    { src: s35, desc: "House at Bhilai", class: "" },
  ];

  return (
    <div>
      <div className="new_cont">
        <div className="">
          <br /> <br />
          <div className="s1">WORK.</div>
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
              <u>  01. Resedential Spaces </u>
              <br />
              <br />
              We have ideal conditions and are able to reach the highest details
              and reduce production time. Which allows us to keep control of the
              price, remove any onsite construction constraints and make your
              dream home, on time, on budget, at the highest quality possible.
            </div>
            <div>
              <div>
                <u> 01. Commercial Spaces </u>
                <br />
                <br />
              </div>
              We have ideal conditions and are able to reach the highest details
              and reduce production time. Which allows us to keep control of the
              price, remove any onsite construction constraints and make your
              dream home, on time, on budget, at the highest quality possible.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="">
          <Swiper
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            slidesPerView={"3"}
            centeredSlides={false}
            spaceBetween={30}
            scrollbar={{
              hide: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar, Autoplay]}
            className="mySwiper proSwiper"
          >
            {data.map((data) => (
              <SwiperSlide>
                <div className="proCard">
                  <div>
                    <div className="project_img">
                      <img src={data.src} alt="" srcset="" />
                      <a href="/" className="project_overlay">
                  <div className="overlay_content">
                    <div className="s4"> Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.</div>
                    
                  </div>
                </a>
                      <br />
                      {/* <div className="title">4BHK Duplex Villa at Bhilai</div>
                      <br />
                      <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.
                      </div>
                      <div className="linkbtn">know more</div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 
      
      */}

      {/* <div className="project_cont">
        <div className="head_cont">
          <div className="s3">WORKS.</div>
          <br />
          <div className="s4">
            Below you’ll find a collection of our recent designs. We hope that
            our gallery will inspire you, while also giving you a closer look
            into the possibilities of civil structures.
          </div>
        </div>
        <div className="project_grid">
          {data.map((data) => (
            <div className={data.class}>
              <div className="project_img">
                <img src={data.src} alt="" srcset="" />
                <a href="/" className="project_overlay">
                  <div className="overlay_content">
                    <div className="s4">{data.desc}</div>
                    <div className="s5">
                      <u> click to know more!</u>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};
