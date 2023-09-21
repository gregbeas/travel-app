import React from "react";
import "./Home.scss";

import {FiArrowRightCircle} from "react-icons/fi";

const Home = () => {
  return <section id="home">
    <div className="section-text">
      <h1>Travel Smarter, <em>Travel With Us</em></h1>
      <p>Find your next vacation destination and unlock your sense of adventure!</p>
      <a href="#destinations"><button className="btn">GET STARTED <FiArrowRightCircle className="icon"/></button></a>
    </div>
    <div id="popular-destinations">
      <h3>Popular Destinations</h3>
      <div className="images flex">
        {/* <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" /> */}
      </div>
    </div>
  </section>;
}

export default Home;
