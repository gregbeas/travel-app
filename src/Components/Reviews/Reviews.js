import React from "react";
import "./Reviews.scss";

import {BsStarFill} from "react-icons/bs";
import {BsStarHalf} from "react-icons/bs";
import {BsStar} from "react-icons/bs";



const Reviews = () => {
  return <section className="scroll-padding section container" id="reviews">
    <div className="secHeading">
        <p className="green-text">FROM OUR CLIENTS</p>
        <h3>What Our Travelers Say About Us</h3>
    </div>
    <div className="secContainer grid">
      <div className="review-card" data-aos="fade-up">
        <p className="customer-name">John, 42</p>
        <div className="review-text">
          <p>
            We have had the most incredible holiday and put this down to the expertise of the company.
            The advice we recieved on trips and destinations was invaluable and we felt 
            very confident as we tailored our to include some very special locations we
            wouldn't have known about as well as the ones we did.
          </p>
        </div>
        <span className="stars flex">
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
        </span>
      </div>
      <div className="review-card" data-aos="fade-up">
        <p className="customer-name">Audrey, 56</p>
        <div className="review-text">
          <p>
          Had a wonderful trip to Texas. We wanted to see Dallas and the Texas Book Depository but 
          after that we needed some specialist advice. The itinerary of the Fort Worth
          Stockyards, the rodeo, Fredericksburg, San Antonio and Austin was all brilliant. The hotels 
          chosen were excellent and brilliantly located. There was a problem that the Fairmont Dallas 
          charged us for our already pre-paid rooms but this was dealt with quickly and fully refunded
          once we asked the company to deal with it. A great experience at every stage.
          </p>
        </div>
        <span className="stars flex">
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStar  className="icon"size={25} color={"#006241"}/>
        </span>
      </div>
      <div className="review-card" data-aos="fade-up">
        <p className="customer-name">Tess, 47</p>
        <div className="review-text">
          <p>
          A BIG thank you for organising the trip of a lifetime for our honeymoon!
          Lots of time was taken to understand our requirements for the safari element in particular... 
          which was to experience the animals away from all the crowds, and this was certainly achieved. 
          They clearly know the area well and has a passion for East Africa. They also did particularly
          well arranging it all with not much notice!
          </p>
        </div>
        <span className="stars flex">
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarHalf  className="icon"size={25} color={"#006241"}/>
        </span>
      </div>
      <div className="review-card" data-aos="fade-up">
        <p className="customer-name">Gerry, 58</p>
        <div className="review-text">
          <p>
          We planned and organised a 2 week trip to do some safari adventures in Tanzania's Siwandu 
          Camp within the Selous National Park and then on to Zanzibar's Baraza Resort for a bit of 
          beach and sun - we are a couple in our fifties and took our 'kids' aged 20, 18 and 17.
          The planning, advice, handholding, communications and enthusiasm from everyone we have met 
          from the company has been exemplary and they should all be congratulated for building us 
          some memories we will never forget and for making my 'dad at the airport' duties very 
          simple and stress free.
          </p>
        </div>
        <span className="stars flex">
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
        </span>
      </div>
      <div className="review-card" data-aos="fade-up">
        <p className="customer-name">Kristine, 40</p>
        <div className="review-text">
          <p>
            This was a family trip and as we planned we added more people and they were very accommodating 
            to all our needs. They offered a great payment plan to make the trip easier to manage and not 
            have a hugh credit card bill with interest to pay after the trip.The trip was seamless and 
            flowed without any issues.
          </p>
        </div>
        <span className="stars flex">
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarHalf  className="icon"size={25} color={"#006241"}/>
        </span>
      </div>
      <div className="review-card" data-aos="fade-up">
      <p className="customer-name">Denis, 48</p>
        <div className="review-text">
          <p>
            Our representative was excellent, from start to finish. They took time to understand what we were 
            hoping for, and put together a wonderful trip, that took into account our very precise, fixed 
            dates! everything was super-organised with all the transfers, flights, places to stay, guides 
            etc all being sorted, and good advice regarding visas etc, especially when mine was a bit delayed.
          </p>
        </div>
        <span className="stars flex">
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon" size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
          <BsStarFill  className="icon"size={25} color={"#006241"}/>
        </span>
      </div>
    </div>
  </section>;
}

export default Reviews;