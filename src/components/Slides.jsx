import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";


import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
export const Slides = () => {
  const data = [
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461317/media/nalini-associates/46_wskrom.jpg",
      desc: "House at Bhilai",
      class: "",
    },
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461313/media/nalini-associates/42_ngx5y5.jpg",
      desc: "House at Raipur",
      class: "",
    },
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461312/media/nalini-associates/45_nez5mo.jpg",
      desc: "Office at Durg",
      class: "",
    },
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461309/media/nalini-associates/35_qmgcwl.jpg",
      desc: "House at Bhilai",
      class: "",
    },
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461308/media/nalini-associates/30_t57jks.jpg",
      desc: "House at Bhilai",
      class: "",
    },
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461305/media/nalini-associates/33_uhihmr.jpg ",
      desc: "House at Bhilai",
      class: "",
    },
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461296/media/nalini-associates/10_sutlzk.jpg",
      desc: "House at Bhilai",
      class: "",
    },
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461294/media/nalini-associates/3_nzveua.jpg",
      desc: "House at Bhilai",
      class: "",
    },
    {
      src: "https://res.cloudinary.com/dcxwex73e/image/upload/v1672461297/media/nalini-associates/15_nvblzf.jpg",
      desc: "House at Bhilai",
      class: "",
    },
  ];
  return (
    <div className="gallery_cont">
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
        {data.map((data) => (
          <SwiperSlide>
            <img src={data.src} alt="" srcset="" />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
