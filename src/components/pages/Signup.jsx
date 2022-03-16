import React from "react";
import image from "../../images/img-6.jpg";
const Signup = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height:'88.2vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
      }}
    >
      <h1 style={{fontSize:'5rem',color:'blue'}}>Sign Up</h1>
    </div>
  );
};

export default Signup;
