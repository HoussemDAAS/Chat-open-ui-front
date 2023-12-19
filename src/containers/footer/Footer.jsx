import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className="wedding__footer section__padding">
    <div className="wedding__footer-heading">
      <h1 className="gradient__text">What are you waiting for?</h1>
    </div>

    <div className="wedding__footer-btn">
      <p>Contact us</p>
    </div>

    <div className="wedding__footer-links">
      <div className="wedding__footer-links_logo">
        <img src={logo} alt="wedding_logo" />
        <p>Wedding Planner<br /> All Rights Reserved</p>
      </div>
      <div className="wedding__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="wedding__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="wedding__footer-links_div">
        <h4>Get in touch</h4>
        <p>41 rue algerie,bizerte</p>
        <p>216-50699724</p>
        <p>weeding@gmail.com</p>
      </div>
    </div>

    <div className="wedding__footer-copyright">
      <p>@2023 Daas Houssem. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer