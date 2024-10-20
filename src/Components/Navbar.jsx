import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow_icon.png";
import { CoinContext } from "../context/Coincontext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navBar">
      <Link to={`/`}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <ul>
        <Link to={`/`}>
          <li>Home</li>
        </Link>
        <li>Price</li>
        <li>Blog</li>
        <li>Features</li>
      </ul>
      <div className="navRight">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className="btn">
          Sign up
          <img src={arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
