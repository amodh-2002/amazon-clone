import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </NavLink>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* logo  */}
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <NavLink to={!user && "/login"}>
          <div onClick={handAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </NavLink>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Order</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

// learn about optional chaining
