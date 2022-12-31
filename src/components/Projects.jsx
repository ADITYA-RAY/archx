import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";

export const Projects = () => {
  const data = [
    { src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461317/media/nalini-associates/46_wskrom.jpg", desc: "House at Bhilai", class: "" },
    { src:"https://res.cloudinary.com/dcxwex73e/image/upload/v1672461313/media/nalini-associates/42_ngx5y5.jpg" , desc: "House at Raipur", class: "" },
    { src: 'https://res.cloudinary.com/dcxwex73e/image/upload/v1672461312/media/nalini-associates/45_nez5mo.jpg', desc: "Office at Durg", class: "" },
    { src: 'https://res.cloudinary.com/dcxwex73e/image/upload/v1672461309/media/nalini-associates/35_qmgcwl.jpg', desc: "House at Bhilai", class: "" },
    { src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461308/media/nalini-associates/30_t57jks.jpg", desc: "House at Bhilai", class: "" },
    { src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461305/media/nalini-associates/33_uhihmr.jpg ", desc: "House at Bhilai", class: "" },
    { src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461296/media/nalini-associates/10_sutlzk.jpg", desc: "House at Bhilai", class: "" },
    { src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461294/media/nalini-associates/3_nzveua.jpg", desc: "House at Bhilai", class: "" },
    { src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461297/media/nalini-associates/15_nvblzf.jpg", desc: "House at Bhilai", class: "" },
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
