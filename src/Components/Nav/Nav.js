import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import "./Nav.css";
import { useStateValue } from "../../StateProvider/StateProvider";
const Nav = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <nav className="nav">
      <Link className="link" to="/">
        <h1 className="title">Home</h1>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <FaSearch className="header__searchIcon" />
        <span style={{ color: "white", marginRight: "10px" }}> Search</span>
      </div>
      <Link className="link" to="/cart">
        <div className="cartWrapper">
          <h2 style={{ marginRight: "10px", color: "white" }}>Cart</h2>
          <BsFillCartCheckFill className="icon" />
          <h3 style={{ color: "white" }}>{cart.length}</h3>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
