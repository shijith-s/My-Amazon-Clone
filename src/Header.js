import React, { useContext } from "react";
import logo from "./images/amazon_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "./CartContext";
import { auth } from "./Firebase";

function Header() {
  const [{ cart, user }, dispatch] = useContext(CartContext);
  const signOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header" id="header">
      {/* logo on the left */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="amazon logo" />
      </Link>

      {/* search bar with icon */}
      <div className="header__searchbar">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links to login,orders,prime */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user ? "/login" : ""} className="header__link">
          <div className="header__option" onClick={signOut} title={(user)?"Hello "+user.email:"Sign In now"}>
            <span>Hello,</span>
            <span>{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span>Returns</span>
            <span>&amp;Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/prime" className="header__link">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
      </div>
      {/* basket with no of items */}
      <Link to="/checkout" className="header__link">
        <div className="header__cart">
          <ShoppingCartIcon className="header__cartIcon" />
          <div>
            <span className="header__cartCount">{cart.length}</span>
            <span>Cart</span>
          </div>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
