import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <h1>TRVL</h1>
            <i className="fas fa-rocket"></i>
          </div>
          <div className="links">
            <ul>
              <li onClick={() => navigate("/home")}>Home</li>
              <li onClick={() => navigate("/services")}>Services</li>
              <li onClick={() => navigate("/products")}>Products</li>
              <li onClick={() => navigate("/signup")}>
                <Button style={{border:'1px solid white',color:'lightgrey',padding:'0.5rem 1rem',fontWeight:'bold',fontSize:'1rem'}}>SIGN UP</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
