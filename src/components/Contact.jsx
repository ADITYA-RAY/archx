import React from "react";
import logo from "../assets/img/logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

export const Contact = () => {
  return (
    <div>
      <div className="contact"></div>
      <div className="con_overlay">
        <div className="con_logo"></div>
        <div className="address">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="wave"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#00000"
              fill-opacity="1"
              d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,234.7C672,235,768,245,864,218.7C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="footer">
            <div className="logo">
              <img src={logo} height="40px" alt="" srcset="" />
              <br />
              NALINI ASSOCIATES
            </div>

            <div>
              <br />
              <br />
              <table>
                <tr>
                  <td>
                    <BsFillEnvelopeFill
                      style={{ color: "#ff4747", fontSize: "1.5rem" }}
                    />
                  </td>
                  <td> contact@naliniassociates.com</td>
                </tr>
                <br />
                <tr>
                  <td>
                    <BsFillTelephoneFill  style={{ color: "#ff4747", fontSize: "1.5rem" }}/>
                  </td>
                  <td> +91 7007282081</td>
                </tr>
                <br />
                <tr>
                  <td>
                    <FaMapMarkerAlt
                      style={{ color: "#ff4747", fontSize: "1.5rem" }}
                    />
                  </td>
                  <td>
                    {" "}Shop No.-2, Awadhiya Complex, Pragati Nagar, Chhaya Garden
                    Road, Risali, Bhilai (C.G.)
                  </td>
                </tr>
              </table>
             
            </div>
            
          </div>
          <div className="copyright">
                 Copyright 	&#169; Nalini Associates 2022
              </div>
        </div>
      </div>
    </div>
  );
};