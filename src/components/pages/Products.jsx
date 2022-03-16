import React from "react";
import image from "../../images/img-5.jpg";
const Products = () => {
  return (
    <div
      style={{
        height:'88.2vh',
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <h1 style={{fontSize:'5rem',color:'white'}}>Products</h1>
    </div>
  );
};

export default Products;
