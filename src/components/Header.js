import LOGO_URL from "../utils/common";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

  const[logstat,setlogstat]=useState("Login")
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li key="nav-item-1">
              <Link to="/">Home</Link>
            </li>
            <li key="nav-item-2">
              <Link to="/about">About</Link>
            </li>
            <li key="nav-item-3">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li key="nav-item-4">
              <Link>Cart</Link>
            </li>
            <button className="login-btn" onClick={()=>{
              return logstat=="Login"?setlogstat("Logout"):setlogstat("Login")
            }}>{logstat}</button>
          </ul>
        </div>
      </div>
    );  
  }

export default Header;