import React from "react";
import "./Middle.scss";


const Middle = () => {

  return <section id="middle">
    <div className="secContainer container" data-aos="fade-right">
      <div className="flex">
        <span className="flex middle-span">
          <h2>2K+</h2>
          <p>Destinations</p>
        </span>
        <span className="flex middle-span">
          <h2>10K+</h2>
          <p>Customer Reviews</p>
        </span>
        <span className="flex middle-span">
          <h2>4.8</h2>
          <p>Overall Rating</p>
        </span>
      </div>
    </div>
  </section>;
}

export default Middle;