import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import { ImQuotesLeft } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

export const Testimonials = () => {
  const testimonials = [
    {
      src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      text: "Most happy with the service. My dream home became a reality in the finest way.",
      name: "Ram Singh",
      bg: "#fffff",
    },
    {
      src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      text: "Most happy with the service. My dream home became a reality in the finest way.",
      name: "Ram Singh",
      bg: "#fffff",
    },
    {
      src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      text: "Most happy with the service. My dream home became a reality in the finest way.",
      name: "Ram Singh",
      bg: "#fffff",
    },
  ];
  return (
    <div className="sp ">
      <div className="about_cont">
        <div>
          <div className="s5">What our clients say about us?</div>
          <br />
          <div className="s4">
            Below you’ll find a collection of our recent designs. We hope that
            our gallery will inspire you, while also giving you a closer look
            into the possibilities of civil structures.
          </div>
          <br />
        </div>

        <div>
          <Swiper
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },

              "@1.00": {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            slidesPerView={"1"}
            centeredSlides={true}
            spaceBetween={30}
            scrollbar={{
              hide: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((data) => (
              <SwiperSlide>
                <div className="testimonial">
                  {/* <div className="quotes">
                 <ImQuotesLeft/>
             </div> */}
                  <img className="avatar" src={data.src} alt="" srcset="" />
                  <div className="text">
                    <div className="stars">
                      {" "}
                      <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    "{data.text}"
                  </div>
                  <div className="name">-{data.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
