import React from "react";
import Card from "react-bootstrap/Card";
import { SiVerizon } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa6";
import Slider from "react-slick";
import logo2 from "../assets/imag/logo2.svg";
import logo3 from "../assets/imag/logo3.svg";
import logo4 from "../assets/imag/logo4.svg";
import logo5 from "../assets/imag/logo5.svg";
import logo6 from "../assets/imag/logo6.svg";
import logo7 from "../assets/imag/logo7.svg";
import logo8 from "../assets/imag/logo8.svg";
import logo9 from "../assets/imag/logo9.svg";
import logo10 from "../assets/imag/logo10.svg";
import logo11 from "../assets/imag/logo11.svg";
import Features from "./Features";
import FeaturesTwo from "./Features2";
import FeaturesThree from "./Features3";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    variableWidth: true,
  };

  return (
    <>
      <div className="container " >
        <div className=" mt-5">
          <div className="text-center">
            <h6 style={{ color: "purple" }}>DRIBBBLE HIRING</h6>
            <h1 className="heading">Hire the world’s top designers</h1>
            <p className="shadow-para">
              Whether you prefer to actively seek out candidates using Designer
              Search or let designers come to you through our Job Board,
              Dribbble Hiring makes it easier than ever to source top-notch
              design talent.
            </p>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-lg-5">
            <Card className="p-4" style={{ borderRadius: "20px" }}>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h3 className="mb-4"> Job Board</h3>
                </Card.Title>
                <Card.Subtitle className="mb-3 ">
                  Let top creative talent come to you by posting your listing on
                  #1 design job board.
                </Card.Subtitle>

                <div className="mb-4" >
                  <h3>$99</h3>
                  <p className="text-muted">per month</p>
                </div>

                <div className="mb-5">
                  <p>
                    {" "}
                    <SiVerizon className="icon1" /> Average of 1.1k targeted
                    clicks per month
                  </p>
                  <p>
                    {" "}
                    <SiVerizon className="icon1" /> Easily hire for full-time or
                    freelance placements
                  </p>
                  <p>
                    {" "}
                    <SiVerizon className="icon1" /> Swap out listings as needed
                  </p>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <button className="card-button-1"> Find Talent</button>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="text-muted" style={{ fontSize: "13px" }}>
                    Cancel anytime. No strings attached.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
            <div className="col-lg-2"> </div>
          <div className="col-lg-5">
          <Card className="p-4" style={{ borderRadius: "20px",border:"2px solid purple" }}>
          <Card.Body>
            <Card.Title>
              {" "}
              <h3 className="mb-4"> Hiring Suite</h3>
            </Card.Title>
            <Card.Subtitle className="mb-3 ">
            Tap into our ready-to-hire community of top designers with our seamless hiring solution.
            </Card.Subtitle>

            <div className="mb-4" >
              <div className="d-flex"><del><h3 className="text-muted mr-3">$499 </h3> </del> <h3> $199</h3></div>
              <p className="text-muted">per month</p>
            </div>

            <div className="mb-5">
            <p>
            <FaArrowLeft className="icon1" /> Job Board included
          </p>
          <p>
            <SiVerizon className="icon1" /> Search our entire database of
            available designers
          </p>
          <p>
            <SiVerizon className="icon1" /> Filter by work, location,
            budget, and more
          </p>
          <p>
            <SiVerizon className="icon1" /> Unlimited messages for
            designer outreach
          </p>
          <p>
            <SiVerizon className="icon1" /> Save and bookmark designers
            for future needs
          </p>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button className="card-button-2">Post a Job</button>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-muted" style={{ fontSize: "13px" }}>
                Cancel anytime. No strings attached.
              </p>
            </div>
          </Card.Body>
        </Card>
          </div>
        </div>

        <div className="row">
          <p className="text-center">
            {" "}
            <b>
              We’ve helped some of the world’s best design-forward companies
              hire expert creatives
            </b>
          </p>
          <Slider {...settings}>
            <div>
              <img src={logo2} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo3} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo4} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo5} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo6} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo7} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo8} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo9} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo10} className="all-logos" alt="" />
            </div>
            <div>
              <img src={logo11} className="all-logos" alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <Features/>
      <FeaturesTwo/>
      <FeaturesThree/>
    </>
  );
};

export default Home;
