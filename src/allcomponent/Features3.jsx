import React from 'react'
import Card from "react-bootstrap/Card";
import { SiVerizon } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa6";

const FeaturesThree = () => {
  return (
    <div className='row whole-container mt-5'  >
        <div  ><h1 className='text-center heading m-5'>Find your next creative professional today!</h1></div>
        <div className="row mb-5 " >
        <div className="col-lg-2"></div>
        <div className="col-lg-4  ">
          <Card className="p-4 " style={{ borderRadius: "20px" }}>
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
                <button className="card-button-1">Post a Job</button>
              </div>
              <div className="d-flex justify-content-center">
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  Cancel anytime. No strings attached.
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
        
        <div className="col-lg-4">
        <Card className="p-4 " style={{ borderRadius: "20px", border:"2px solid purple" }}>
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
        <div className="col-lg-2"></div>
      </div>
      
    </div>
  )
}

export default FeaturesThree;