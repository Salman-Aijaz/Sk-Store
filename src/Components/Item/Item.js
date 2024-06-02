import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  // console.log("ITEM props",props)  
  // console.log("ITEM props id",props.id) //ABHI HMEIN SAARI ID NH MILEGE JESE AMARA URL CHANGE HOOGA AUR JITNE PRODUCT HOGE UTNA HMEIN PRODUCT MILEGA
  return (
    <div className="item">
     <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /> </Link> 
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
