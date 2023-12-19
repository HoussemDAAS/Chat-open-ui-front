import React from 'react'
import './Possibility.css'
import Pos  from "../../assets/possiblity.png";
const Possiblity = () => {
  return (
    <div className='weeding__possiblity section__padding' id='possibility'>
      <div className='weeding__possiblity-image'>
        <img src={Pos} alt="possiblity" />
      </div>
      <div className='weeding__possiblity-content'>
        <h4>Let us make your dream wedding</h4>
        <h1 className='gradient__text'>Unveiling Infinite Elegance: Where Your Wedding Dreams Transcend Imagination</h1>
        <p>Navigating the journey of matrimonial bliss requires a seasoned guide. Allow our wedding planning expertise to be the compass that leads you through an enchanting celebration, where every detail is orchestrated with symphonic precision. From the first flourish of invitation fonts to the final whisper of the farewell toss, we transform the chaotic symphony of choices into a harmonious melody of moments. With us at the helm, savor a seamless soiree where indulgence in joy is the only task at hand. Trust in our orchestration; bask in the wondrous spectacle of your union.</p>
        <h4>Let us make your dream wedding</h4>
      </div>
 
    </div>
  )
}

export default Possiblity