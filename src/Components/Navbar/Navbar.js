import React, {useState} from "react";
import "./Navbar.scss";
import { PiAirplaneTakeoffFill } from "react-icons/pi";

const Navbar = () => {

  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);

  const navToggle = () => {
    setDataVisible(!dataVisible);
    setAriaExpanded(!ariaExpanded);
  }

  return <nav className="nav-bar flex">
    <div className="logo">
      <a href="index.html"><PiAirplaneTakeoffFill className="icon" size={75} color={'#006241'}/></a>
    </div>
    <div className="menu" data-visible={dataVisible}>
      <ul className="flex" aria-label="menu">
        <a href="#home"><li className="nav-item" onClick={navToggle}>Home</li></a>
        <a href="#destinations" className="nav-item"><li onClick={navToggle}>Destinations</li></a>
        <a href="#portfolio"><li className="nav-item" onClick={navToggle}>About Us</li></a>
        <a href="#reviews"><li className="nav-item" onClick={navToggle}>Reviews</li></a>
      </ul>
    </div>
    <button className="sign-up-btn btn">Sign Up</button>
    <div id="toggle-div">
      <button id="nav-toggle" aria-controls="menu" aria-expanded={ariaExpanded} onClick={navToggle}><span className="visually-hidden">Menu</span></button>
    </div>
  </nav>;
}

export default Navbar;