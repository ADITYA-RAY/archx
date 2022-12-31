import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import s1 from "../assets/images/1.jpg";
import s2 from "../assets/images/2.jpg";
import s3 from "../assets/images/3.jpg";
import s4 from "../assets/images/4.jpg";
import s5 from "../assets/images/5.jpg";
import s6 from "../assets/images/6.jpg";
import s7 from "../assets/images/7.jpg";
import s8 from "../assets/images/8.jpg";
import s9 from "../assets/images/9.jpg";
import s10 from "../assets/images/10.jpg";
import s11 from "../assets/images/11.jpg";

import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
export const Slides = () => {
  return (
    <div className="gallery_cont">
      {/* <div className="head_cont">
        <div>
          <div className="s3">GALLERY.</div>
          <br />
          <div className="s4">
            Below you’ll find a collection of our recent designs. We hope that
            our gallery will inspire you, while also giving you a closer look
            into the possibilities of civil structures.
          </div>
        </div>
      </div> */}

      <div className="slide_cont"></div>
      <Swiper
        breakpoints={{
          "@0.00": {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
     
          "@1.00": {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        
        }}
        slidesPerView={"1.5"}
        centeredSlides={true}
        spaceBetween={30}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={s1} alt="" srcset="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={s2} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s4} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s5} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s6} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s7} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s8} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s9} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s10} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s11} alt="" srcset="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
