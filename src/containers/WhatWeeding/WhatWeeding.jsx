import React from "react";
import "./Weeding.css";
import { Feature } from "../../components";
const WhatWeeding = () => {
  return (
    <div className="wedding__whatwedding section__margin" id="WhatWeeding">
      <div className="wedding__whatwedding-feature">
        <Feature
          title="What is Wedding Planner"
          text="Creating unforgettable moments,Wedding Planner is a wedding planning agency where elegance meets precision. We craft personalized celebrations that capture your essence and leave a lasting impression."
        />
      </div>
      <div className="wedding__whatwedding-heading">
        <h1 className="gradient__text">
           Where Imagination Meets Celebration
        </h1>
        <p>Explore the Library of Love</p>
      </div>
      <div className="wedding__whatwedding-container">
      <Feature title="Consultation" text="Providing guidance and advice on the wedding theme, style,
       colors, and etiquette.
       They might also help couples set and stick to a budget." />
      <Feature title="Planning" text="Helping select and reserve venues for the wedding and reception, aligning schedules, and coordinating transportation." />
      <Feature title="Organization" text="Handling the logistics, from guest lists and invitations to accommodation and transportation for out-of-town guests." />
      </div>
    </div>
  );
};

export default WhatWeeding;
