import React from "react";
import "./Footer.scss";

import { PiAirplaneTakeoffFill } from "react-icons/pi";

import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return <footer id="footer" className="scroll-padding">
  <hr />
  <div className="section container footer" >
      <div className="footer-logo">
        <PiAirplaneTakeoffFill className="icon" color={"var(--colorGreen"} size={75}/>
        <h2 className="green-text">Travel With Us</h2>
      </div>
      <div className="footer-links" id="footer_nav">
        <span className="links-title">Navigation</span>
        <a href="#home">Home</a>
        <a href="#destinations">Destinations</a>
        <a href="#portfolio">About Us</a>
        <a href="#reviews">Reviews</a>
      </div>
      <div className="footer-links" id="footer_help">
        <span className="links-title">Helpful Links</span>
        <a href="#questions">FAQ</a>
        <a href="#contact-us">Ask a Question</a>
        <span className="links-title">Contact Us</span>
        <a href="mailto:gregorybeas4@gmail.com">example@email.com</a>
        <p className="phone">(123) 456-7890</p>
      </div>
       <div className="socials flex">
        <button><FaInstagramSquare  className="icon" size={30} color={'var(--colorGreen)'}/></button>
        <button><FaFacebook className="icon" size={30} color={'var(--colorGreen)'}/></button>
        <button><FaTwitter className="icon" size={30} color={'var(--colorGreen)'}/></button>
      </div>
    </div>
    </footer>
}

export default Footer;