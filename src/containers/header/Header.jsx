import React from "react";
import "./Header.css";
import people from"../../assets/people.png"
import weeding from"../../assets/weeding.png"
const Header = () => {
  return (
    <div className="wedding__header section__padding padding__section--small-top" id="HOME">
      <div className="wedding__header-content">
        <h1 className="wedding__GradientText">Dreams & Visions Unfold</h1>
        <p>
          Crafting your dream day with precision and passion. From the first
          flutter of excitement to the final standing ovation, we ensure a
          seamless journey to ‘I do.’ Your love story, our master plan.
        </p>
        <div className="wedding__header-content__input">
          <input type="email" placeholder="Your Email" />
          <button type="button">Get started</button>
        </div>
        <div className="wedding__header-content__people">
          <img src={people}/>
          <p>1.6k satisfied client in our journey</p>
        </div>
      </div>
      <div className="wedding__header-image">
            <img src={weeding}/>
            </div>
    </div>
  );
};

export default Header;
