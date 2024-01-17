import React from "react";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
const Features = () => {
  return (
    <div className="container mb-5 mt-5" style={{overflowX:"hidden"}} >
      <div className="row mt-5">
        <div className="col-lg-4 mt-5 p-3">
          <div className="button-background mb-5">
            <p>
              <b>Job Board</b>
            </p>
          </div>
          <div >
            <h3 className="text-muted mb-4 ">
              <b>The #1 job board for top design talent</b>
            </h3>
            <p>
              Our job board postings receive an average of 1.1k targeted clicks
              per month and are viewed by over 1 million top designers globally.
              With a proven track record assisting over 60,000 companies, you’ll
              spend less time sorting through unqualified candidates and more
              time hiring amazing talent.
            </p>
          </div>
          <div>
            <button className="card-button-3"> Visit the job board</button>
          </div>
        </div>

        <div className="col-lg-8 mt-5 d-flex justify-content-center">
          <div  className="video-container">
            <video className="video-1  "  autoPlay loop muted>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      
      <div className="row mt-5">
      <div className="col-lg-8 mt-5 ">
      <div  className="video-container-2">
        <video className="video-1  "  autoPlay loop muted>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-lg-4 mt-5 p-3">
    <div className="button-background-2 mb-5">
      <p>
        <b>Job Board</b>
      </p>
    </div>
    <div >
      <h3 className="text-muted mb-4 ">
        <b>The #1 job board for top design talent</b>
      </h3>
      <p>
        Our job board postings receive an average of 1.1k targeted clicks
        per month and are viewed by over 1 million top designers globally.
        With a proven track record assisting over 60,000 companies, you’ll
        spend less time sorting through unqualified candidates and more
        time hiring amazing talent.
      </p>
    </div>
    <div>
      <button className="card-button-3"> Visit the job board</button>
    </div>
  </div>
      </div>
      
    </div>
  );
};

export default Features;
