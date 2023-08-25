import React from "react";
import "./Navbar.scss";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
  return <div className="nav-bar">
    <div className="logo">
      <PiAirplaneTakeoffFill className="icon" size={75} color={'#006241'}/>
    </div>
    <div className="menu">
      <ul>
        <li className="nav-item">Destination</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Testimonials</li>
        <li className="nav-item">Gallery</li>
      </ul>
    </div>
    <button className="sign-up-btn btn">Sign Up</button>
    <FaBars className="icon" size={25} color={'black'}/>
  </div>;
}

export default Navbar;