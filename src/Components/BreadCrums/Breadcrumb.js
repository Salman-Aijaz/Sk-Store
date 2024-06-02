import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const  {product}  = props; //{} M ISLIYE H AGAR WITHOUT {} DEKHE TO CHEEZEIN IK OBJECT M HAI PHIR HAMEIN WO PRODUCT.PRODUCT KRKE NIIKALNA HOGA 
  // console.log("BREADCRUM PROPS",product)
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
