import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header_search">
        <input
          className="header_searchInput"
          placeholder="Search Amazon.in"
          type="text"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link style={{ textDecoration: "none" }} to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello, {!user ? "Guest" : user?.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <Link to="/Orders" style={{textDecoration:"none", color:"white", display:"flex", flexDirection:"column"}}>
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </Link>
        </div>

        <div className="header_option">
          <Link to="https://prime-video-cm7.netlify.app/" style={{textDecoration:"none", color:"white", display:"flex", flexDirection:"column"}}>
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </Link>  
        </div>

        <Link style={{ textDecoration: "none" }} to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo  header_basketCount">
              {basket?.length}
              {/* through useStateValue using state(basket) the count (basket?.length) (why using ? here is to not make errors like error exception handling) of items (number) will update here */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
