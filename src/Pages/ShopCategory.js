import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // console.log("ALL-PRODUCT",all_product)
  // console.log("PROPS OF SHOP_CATEGORY",props)  //APP.JS M JO HMNE CATEGORY DI HAIN WO AEGI KIDS LINK P CLICK KROGE TO CATEGORY KID HOGI
  // const [sortingCriteria, setSortingCriteria] = useState("default");

  // const handleSortingChange = (event) => {
  //   // console.log("Value ",event.target.value)
  //   setSortingCriteria(event.target.value);
  // };

  // const sortProducts = (products, criteria) => {
  //   console.log("My products",products)
  //   console.log("My crteria ",criteria)
  //   let a = products.slice(0,4)
  //   // console.log(a)
  //   if (criteria === "default") {
  //     return products; 
  //   } else if (criteria == "1-4") {
  //     return products.slice(0, 4); 
  //   } else if (criteria == "5-8") {
  //     return products.slice(4, 8);
  //        } else if (criteria == "9-12") {
  //     return products.slice(8, 12);
  //   } else {
  //     return products; 
  //   }
  // };
  // const sortedProducts = sortProducts(all_product, sortingCriteria);
  //  console.log("Sort Product",sortedProducts)

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="" />
          {/* <form action="#" >
            <label htmlFor="sort"></label>
            <select name="sort" id="sort"  >
            <option value="default">Default</option>
            <option value="#" disabled></option>
              <option value="1-4">1-4 (Product)</option>
              <option value="#" disabled></option>
              <option value="5-8">5-8 (Product)</option>
              <option value="#" disabled></option>
              <option value="9-12">9-12 (Product)</option>
            </select>
          </form> */}
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          // console.log("All products",item)
          // console.log("index",i)
          if (props.category === item.category) {
            return (
              <Item
                name={item.name}
                key={i}
                id={item.id}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <button className="shopcategory-loadmore">Explore More</button>
    </div>
  );
};

export default ShopCategory;
