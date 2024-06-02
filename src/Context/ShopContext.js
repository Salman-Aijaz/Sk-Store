import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";
// console.log("all products",all_product)
export const ShopContext = createContext(null);
// console.log("SHOP CONTEXT OUR CONTEXT API ",ShopContext)

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    // console.log(all_product.length)  //ALL PRODUCTS LENGTH
    cart[index] = 0;
    // console.log("HOW MANY CARTS ARE IN THERE",cart[index])
  }
  // console.log("CARTS",cart)
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // const contextValue={all_product,cartItems}
  //    console.log("Cart Items",cartItems)  //CART ITEMS NUMBER JO CART AA RHA H USKA NUMBER AEGA

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      // console.log("prev ADD TO CART",prev) //AGAR HAM 2 ADD KREGE AND THEN HMEIN BTADEGA K Y PRODUCT 1 1 BAAR ADD HUA HAIN START 0 SE O
      // console.log("ITEM ID ",itemId) //JO ITEM ADD KIA USKI ID AEGI
      // console.log(prev[itemId])
      // console.log("Item id",itemId)
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
    // console.log("ADD TO CART ITEMS", cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      // console.log("Remove item",prev)
      // console.log("ITEM ID TO REMOVE",prev[itemId])
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // console.log("TOTAL AMOUNT OF CART",totalAmount)
    for (const item in cartItems) {
      // console.log("TOTAL CART AMOUNTS",item)
      // console.log("CART ITEMS NUMBER",cartItems[item])
      if (cartItems[item] > 0) {
        // console.log(cartItems[item])
        let item_info = all_product.find((product) => {
          // console.log("Products Cart",product)//ALL PRODUCT
          // console.log("ITEM",item)//PRODUCT ID AUR Y DONO = HOGE TBHI AMOUNT CALCULATE HOGA
          return product.id === Number(item);
        });
        totalAmount += item_info.new_price * cartItems[item];
        //totalAmount += (product-1-price * quantity-product-1) + (product-2-price * quantity-product-2)
        //is m har cart item iterte hoke aa rhe hain
        //Agr cart k jo item h wo 0 se bade ho to
        //all product find krega k product ki id = h mere item ki id se
        //aur isse ham har chiz ki new price nikalege aur wo add hogi aur agr hmne  * cartItems[item]; y na kiya to jo ik item jo ham dobara add kr rhe hain wo add nh hogi aur uske price calculate nh hoge

        // console.log(cartItems[item]);
        // console.log("THE PRICE OF THE PRODUCT ", item_info.new_price);
        // console.log("TOTAL AMOUNT OF CART ",totalAmount)
      }
    }
    return totalAmount;
  };

  /*AGAR CART M JO CHEEZ ADD HOGI WO HMARE LOGO M DIKHEGI  */
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      // console.log("logo-item",item) //ALL ITEM NUMBER CAME 36
      // console.log("LOGO CART IF ANY  PRODUCT IS ADDED",cartItems[item]) //AGAR ADD HUA
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const sorting = () => {

  };
  // console.log(sort_value)
 
  const contextValue = {
    all_product,
    cartItems,
    getTotalCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    sorting,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
