import React from "react";
import "./Destinations.scss";

import { GrMapLocation } from "react-icons/gr";
import {GrMoney} from "react-icons/gr";
import {GrCalendar} from "react-icons/gr";
import {FaSearch} from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

import image1 from "../../Assets/maui1.jpg"
import image2 from "../../Assets/newYork.jpg"
import image3 from "../../Assets/miami.jpg"
import image4 from "../../Assets/bangkok.jpg"
import image5 from "../../Assets/cliffsOfMoher.jpg"
import image6 from "../../Assets/mexicoCity.jpg"
import image7 from "../../Assets/amsterdam.jpg"
import image8 from "../../Assets/dubai.jpg"

const destinations = [
  {
    id: 1,
    img: image1,
    name: 'Maui',
    location: 'Hawaii, United States',
    rating: 4.8,
  },
  {
    id: 2,
    img: image2,
    name: 'New York City',
    location: 'New York, United States',
    rating: 4.6,
  },
  {
    id: 3,
    img: image3,
    name: 'Miami',
    location: 'Florida, United States',
    rating: 4.7,
  },
  {
    id: 4,
    img: image4,
    name: 'Bangkok',
    location: 'Thailand',
    rating: 4.9,
  },
  {
    id: 5,
    img: image5,
    name: 'Cliffs of Moher',
    location: 'County Clare, Ireland',
    rating: 4.9,
  },
  {
    id: 6,
    img: image6,
    name: 'Mexico City',
    location: 'Mexico City, Mexico',
    rating: 4.9,
  },
  {
    id: 7,
    img: image7,
    name: 'Amsterdam',
    location: 'Netherlands',
    rating: 4.7,
  },
  {
    id: 8,
    img: image8,
    name: 'Dubai',
    location: 'United Arab Emirates',
    rating: 4.9,
  },

]

const Destinations = () => {

  return <section id="destinations" className="section scroll-padding container">
    <div className="secContainer">
      <div className="secTitle">
        <span className="green-text"><em>ADVENTURE AWAITS!</em></span>
        <h3>Find Your Dream Destination</h3>
        <div className="searchField grid">
          <div className="inputField flex">
            <label htmlFor="location"><GrMapLocation className="icon" /></label>
            <input type="text" placeholder="Location" id="location"/>
          </div>
          <div className="inputField flex">
            <label htmlFor="budget"><GrMoney className="icon" /></label>
            <input type="text" placeholder="Budget" id="budget"/>
          </div>
          <div className="inputField flex">
            <label htmlFor="date"><GrCalendar className="icon" /></label>
            <input type="date" placeholder="Date" id="date"/>
          </div>
          <button className="btn flex">Search<FaSearch /></button>
        </div>
      </div>
      <div id="destinations-container">
        {destinations.map((destination) => {
          return (
            <div className="destination-card" key={destination.id} data-aos="fade-up">
                      <div className="destination-img">
                        <img src={destination.img} alt={destination.name}/>
                      </div>
                      <div className="destination-info flex">
                        <span className="info">
                          <h3 className="info-name">{destination.name}</h3>
                          <p className="info-location flex"><GrLocation /> {destination.location}</p>
                        </span>
                        <p className="rating">{destination.rating}</p>
                      </div>
                    </div>
          )
        })}
      </div>
    </div>
  </section>;
}

export default Destinations;