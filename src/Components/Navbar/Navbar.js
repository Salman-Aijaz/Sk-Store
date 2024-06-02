import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/logo.png";
import carticon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/arrow-dropdown_2.png";
import { User, useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContext);

  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();
   
// console.log(user)

  const menuRef = useRef();
  
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>SK-STORE</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle}  src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kid
          </Link>
          {menu === "kids" ? <hr /> : <></>}{" "}
        </li>
      {/* <li>
        {
          isAuthenticated && <p>
            {user}
            
          </p>
        }
      </li> */}
        </ul>
      <div className="nav-login-cart">
        {/* <Link to="/login"> */}
        {
         isAuthenticated ? (
         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>  Log Out </button> ):
        (          <button onClick={() => loginWithRedirect()}>Login</button>        )
        }
          {/* <button onClick={() => loginWithRedirect()}>Login</button>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>  Log Out </button> */}
        {/* </Link> */}
        <Link to="/cart">
          <img src={carticon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
