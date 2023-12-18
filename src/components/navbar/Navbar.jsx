import React ,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
const NaVbar = () => {
  const[toggleMenu,setToggleMenu]=useState(false)
  return (
    <div  className='wedding__NavBar'>
     <div className='wedding__NavBar-Links'>
      <div  className='wedding__NavBar-Links_Logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='wedding__NavBar-Links_container'>
        <p><a href='#HOME'>Home</a></p>
        <p><a href='#WhatWeeding'>What is Wedding Planner</a></p>
        <p><a href='#possibility'>What we offer</a></p>
        <p><a href='#Features'>Feature</a></p>
        <p><a href='#blog'>Our work </a></p>
      </div>
      <div className='wedding__NavBar-sign'>
        <button type='button'>Contact us</button>
      </div>
      <div
      className='wedding__NavBar-menu'>
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27}  onClick={()=>setToggleMenu(false)} /> 
        : <RiMenu3Line color="#fff" size={27}   onClick={()=>setToggleMenu(true)} />}
      </div>
     </div>
    </div>
  )
};

export default NaVbar
