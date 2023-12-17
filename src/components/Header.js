import LOGO_URL from "../utils/common";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

  const[logstat,setlogstat]=useState("Login")
    return(
      <div className="flex justify-between bg-pink-200 shadow-lg">
        <div className="logo-container">
          <img className="w-56" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li key="nav-item-1" className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li key="nav-item-2" className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li key="nav-item-3" className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li key="nav-item-4" className="px-4">
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