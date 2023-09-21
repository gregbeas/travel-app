import React from "react";
import "./Portfolio.scss";

import mapIcon from "../../Assets/mapIcon.png";
import supportIcon from "../../Assets/suppportIcon.png";
import medicalIcon from "../../Assets/medicalIcon.png";

import flying from '../../Assets/portfolioFlying.jpg'

const Portfolio = () => {
  return <section className="scroll-padding section container" id="portfolio">
    <div className="secHeading">
          <p className="green-text">WE HAVE OVER 20 YEARS EXPERIENCE IN THE TRAVEL INDUSTRY!</p>
          <h3>Why Should You Choose Us?</h3>
    </div>
    <div className="secContainer grid">
      <div className="leftContent">
        <div className="grid singles-container">
          <div className="single-portfolio">
            <div className="icon-div">
            <img src={medicalIcon} alt="map icon" className="portfolio-icon"/>
            </div>
            <div className="portfolio-info">
              <h4>Safety</h4>
              <p>The safety and wellbeing of out customers is our top priority. We maintain high safety standards and have emergency support available during your entire trip.</p>
            </div>
          </div>
          <div className="single-portfolio">
            <div className="icon-div">
              <img src={mapIcon} alt="map icon" className="portfolio-icon"/>
            </div>
            <div className="portfolio-info">
              <h4>Diverse Destinations</h4>
              <p>Domestic or international, we cater to a wide range of travelers with a large database of destinations to fit every adventurer's interests.</p>
            </div>
          </div>
          <div className="single-portfolio">
            <div className="icon-div">
            <img src={supportIcon} alt="map icon" className="portfolio-icon"/>
            </div>
            <div className="portfolio-info">
              <h4>24/7 Customer Support</h4>
              <p>Our dedicated customer support team is avilable 24 hours a day, 7 days a week to help our travelers before, during, and after your trip.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContent">
        <img src={flying} alt="Plane wing from airplane window" id="portfolio-img"/>
      </div>
    </div>
  </section>;
}

export default Portfolio;