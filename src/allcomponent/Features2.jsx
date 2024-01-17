import React from "react";
import image from "../assets/imag/user1.jpg";
import image2 from "../assets/imag/OneSignal_Logo.png";
import image3 from "../assets/imag/work-img-2.avif";
import { SlDiamond } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { GrShieldSecurity } from "react-icons/gr";

const FeaturesTwo = () => {
  return (
    <div className="container mb-5" >
      <div className="row mt-5 mb-5">
        <div className="col-lg-6 ml-5 mt-5 d-flex justify-content-end">
          <div className="card " >
            <div className="card-body p-4">
              <h4 style={{ fontWeight: "600", lineHeight: "1.5em" }}>
                “ Dribbble is my go-to for hiring designers. It always provides
                a wealth of quality candidates and instantly builds my
                pipeline.”
              </h4>
              <div className="mt-4">
                <img src={image} className="profile-img" alt="" />
                <label className="pl-4">
                  {" "}
                  <b>Lisa Munroe - </b> &nbsp; Head of design, OneSignal{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mt-5 d-flex justify-content-center ">
          <div className="bg-div ">
            <img src={image2} className="logo-img " alt="" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="mt-5">
          <h2 className="text-center mt-5">
            Why brands choose Dribbble to hire design talent
          </h2>
        </div>
        <div className="col-lg-5">
          <div className="mt-5 pr-5">
            <SlDiamond className="icon2 mb-3" /> 
            <h6 style={{textShadow: "1px 1px 29px rgba(220,13,207,0.6)"}}>
              <b>WORLD-CLASS TALENT</b>
            </h6>{" "}
           
            <p>
              From graphic design to UX/UI, our community is home to the world’s
              leading designers and creative agencies.
            </p>
          </div>
          <div className="mt-5 pr-5 ">
            <AiOutlineDollar  className="icon2  mb-3" />
            <h6 style={{textShadow: "1px 1px 29px rgba(220,13,207,0.6)"}}>
              <b>$0 PLACEMENT FEES</b>
            </h6>{" "}
           
            <p>
              We make the hiring process as seamless and cost-effective as
              possible, so you can focus on building your business.
            </p>
          </div>
          <div className="mt-5 pr-5">
            <GrShieldSecurity className="icon2  mb-3" /> 
            <h6 style={{textShadow: "1px 1px 30px rgba(13,220,250,0.9)"}}>
              <b>GLOBAL REACH</b>
            </h6>{" "}
            
            <p>
              With a network of designers spanning over 170 countries, we make
              it easy to find world-class talent, wherever you are in the world.
            </p>
          </div>
        </div>
        <div className="col-lg-7 mt-5">
          <div className="mt-5 d-flex justify-content-end">
            <img src={image3} style={{ borderRadius: "20px" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTwo;
