import React from "react";
import "./Footer.css";
const Footer = () => {
  let data = [
    {
      heading: "About Us",
      childs: [
        "How it works",
        "Testimonials",
        "Careers",
        "Investors",
        "Terms of Services",
      ],
    },
    {
      heading: "Contact Us",
      childs: ["Contact", "Support", "Destinations", "Sponsorships"],
    },
    {
      heading: "Videos",
      childs: ["Submit Video", "Ambassadors", "Agency", "Influencer"],
    },
    {
      heading: "Social Media",
      childs: ["Instagram", "Facebook", "Youtube", "Twitter"],
    },
  ];
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="center-text">
            <h1 className="heading">
              Join the Adventure newsletter to recieve our best vacation deals
            </h1>
            <h3>You can can unsubscribe at any time.</h3>
            <div className="input">
              <input type="text" />
              <button>Subscribe</button>
            </div>
            <div className="footer-row">
              {data.map((values) => (
                <div className="footer-col">
                  <h1>{values.heading}</h1>
                  {values.childs.map((child) => (
                    <p>{child}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-footer">
          <div className="footer-logo">
            <h1>TRVL</h1>
            <i className="fas fa-rocket"></i>
          </div>
          <div className="copyright">
            <h2> &copy; Asadullah 3/16/22 </h2>
          </div>
          <div className="social-media">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
