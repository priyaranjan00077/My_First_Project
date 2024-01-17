import React from "react";
import Slider from "react-slick";
import image1 from "../assets/imag/design.webp";
import image2 from "../assets/imag/branding.webp";
import image3 from "../assets/imag/mobile.webp";
import image4 from "../assets/imag/print.webp";
import image5 from "../assets/imag/typography.webp";
import image6 from "../assets/imag/animation.gif";
import logo from "../assets/imag/logo1.png";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    variableWidth: true,
  };
  return (
    <div className="  mt-5 mb-4">
      <Slider {...settings}>
        <div className="mr-3 ml-3">
          <img src={image1} className="footer-img" alt="" />
          <p>
            <b>Design</b>
          </p>
        </div>
        <div className="mr-3 ml-3">
          <img src={image2} className="footer-img" alt="" />
          <p>
            <b>Branding</b>
          </p>
        </div>
        <div className="mr-3 ml-3">
          <img src={image3} className="footer-img" alt="" />
          <p>
            <b>Mobile</b>
          </p>
        </div>
        <div className="mr-3 ml-3">
          <img src={image4} className="footer-img" alt="" />
          <p>
            <b> Edit </b>
          </p>
        </div>
        <div className="mr-3 ml-3">
          <img src={image5} className="footer-img" alt="" />
          <p>
            <b> Typography</b>
          </p>
        </div>
        <div className="mr-3 ml-3">
          <img src={image6} className="footer-img" alt="" />
          <p>
            <b>Animation</b>
          </p>
        </div>
      </Slider>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-9 footer-div d-flex justify-content-between align-items-center">
            <div>
              {" "}
              <img src={logo} style={{ height: "50px" }} alt="" />
            </div>
            <div>
              <a href="#" className="footer-anchor-3">
                {" "}
                <b>For designers</b>
              </a>
            </div>
            <div>
              <a href="#" className="footer-anchor-3">
                {" "}
                <b>Hire talent</b>
              </a>
            </div>
            <div>
              <a href="#" className="footer-anchor-3">
                {" "}
                <b>Inspiration</b>
              </a>
            </div>
            <div>
              <a href="#" className="footer-anchor-3">
                {" "}
                <b>Advertising</b>
              </a>
            </div>
            <div>
              <a href="#" className="footer-anchor-3">
                {" "}
                <b>Blog</b>
              </a>
            </div>
            <div>
              <a href="#" className="footer-anchor-3">
                {" "}
                <b>About</b>
              </a>
            </div>
            <div>
              <a href="#" className="footer-anchor-3">
                {" "}
                <b>Careers</b>
              </a>
            </div>
            <div>
              <a href="#" className="footer-anchor-3">
                {" "}
                <b>Support</b>
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 d-flex  align-items-center justify-content-end"
            style={{ fontSize: "22px" }}
          >
            <div>
              <a href="" className="footer-anchor-3 mr-4">
                <FaInstagram className="icon3" />{" "}
              </a>{" "}
            </div>
            <div>
              <a href="" className="footer-anchor-3 mr-4">
                <FaPinterest className="icon3" />{" "}
              </a>{" "}
            </div>
            <div>
              <a href="" className="footer-anchor-3 mr-4">
                <ImFacebook className="icon3" />{" "}
              </a>{" "}
            </div>
            <div>
              <a href="" className="footer-anchor-3 mr-4">
                <FaXTwitter className="icon3" />{" "}
              </a>{" "}
            </div>
          </div>
        </div>

        <div className="last-div mt-5">
          <div className="mt-5">
            <p >
              {" "}
              © 2024 Dribbble <a href="#" className="pl-3 footer-anchor-2"> Terms</a>
              <a href="#" className="pl-3 footer-anchor-2"> Privacy</a>
              <a href="#" className="pl-3 footer-anchor-2"> Cookies</a>
            </p>
          </div>

          <div className="mt-5">
           <a href="#" className="pl-3 footer-anchor-2"> jobs</a>
          <a href="#" className="pl-3 footer-anchor-2"> Designers</a>
          <a href="#" className="pl-3 footer-anchor-2"> Freelancers</a>
          <a href="#" className="pl-3 footer-anchor-2"> Tags</a>
          <a href="#" className="pl-3 footer-anchor-2"> Places</a>
          <a href="#" className="pl-3 footer-anchor-2"> Resources</a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
