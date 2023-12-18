import React from 'react'
import{Blog,Footer,Features,Header,Possiblity,WhatWeeding} from './containers'
 import { Brand,NavBar,CTA} from './components'
 import './App.css'
 import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
const App = () => {
  return (
    <div className='App'>
      <div className='gradiant__bg'>
        <NavBar/> 
        <Header/>
      </div>
      <Brand/>
      <WhatWeeding/>
      <Features/>
      <Blog/>
      <Possiblity/>
      <CTA/>
      <Footer/>
      
      
    </div>
  )
}

export default App
