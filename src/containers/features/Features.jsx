import React from 'react'
import './Features.css'
import { Feature } from "../../components";
const featuresData = [
  {
    title: 'Elevating Trust With Every Detail',
    text: 'Our commitment to excellence transforms your vision into a celebration that gains admiration and trust, ensuring every moment is flawlessly executed.',
  },
  {
    title: 'Tailored Commitment to Your Needs',
    text: 'Understanding the uniqueness of each love story, we become active partners in your journey, committing to create a day as special as your bond.',
  },
  {
    title: 'Crafting Personalized Experiences',
    text: 'We prioritize your wishes to deliver a bespoke wedding experience, ensuring your day is a distinct reflection of your personal style and desires.',
  },
  {
    title: 'Honoring Traditions, Embracing Innovation',
    text: 'Melding traditional elegance with modern sophistication, we create a seamless celebration that respects your roots while looking forward to your future together.',
  },
];
const Features = () => {
  return (
    <div className='wedding__features section__padding' id="Features">
      <div className='wedding__features-heading'>
      <h1 className="gradient__text">Dream Boldly. Plan Brilliantly. With Wedding Planner, your future wedding awakens today.</h1>
      <p>Let us make your dream wedding</p>
      </div>
      <div className="wedding__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>

    </div>
  )
}

export default Features