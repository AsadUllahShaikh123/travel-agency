import React from "react";
import image1 from "../../../images/img-9.jpg";
import image2 from "../../../images/img-2.jpg";
import image3 from "../../../images/img-3.jpg";
import image4 from "../../../images/img-4.jpg";
import image5 from "../../../images/img-8.jpg";
const Destinations = () => {
  return (
    <>
      <div className="text-center">
        <h1>Check out these EPIC Destinations!</h1>
      </div>
      <div className="destination-container">
        <div className="boxes">
          <div className="box">
            <img src={image1} alt="" srcset="" />
            <p>Explore the hidden waterfall deep inside the Amazon Jungle </p>
          </div>
          <div className="box">
            <img src={image2} alt="" srcset="" />
            <p>Travel through the islands of Bali in a Private Cruise</p>
          </div>
        </div>
        <div className="boxes">
          <div className="small-boxes">
            <img src={image3} alt="" srcset="" />
            <p>Set Sail in the Atlantic Ocean visiting Uncharted Water</p>
          </div>
          <div className="small-boxes">
            <img src={image4} alt="" srcset="" />
            <p>Experience Football on Top of the Himaliyan Mountains</p>
          </div>
          <div className="small-boxes">
            <img src={image5} alt="" srcset="" />
            <p>Ride through the Sara Desert on a guided camel tour</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
