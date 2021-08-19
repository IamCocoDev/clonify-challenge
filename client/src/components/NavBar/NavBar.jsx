import React, { useState } from 'react'
import "./NavBar.css"
import logo from '../../logo.svg';
import circle from '../../circle.svg';

function NavBar() {

  const [showCircles, setShowCircles] = useState(true);

  return (
    <nav className='NavBar'>
      <div className='Left_Side'>
        <img className='Logo' src={logo} alt="React Logo page" />
      </div>
      <div className='Right_Side'>
        <div className='Circle' id={showCircles ? "hidden" : ""}>
          {
            showCircles ? 
            <>
            <img className='Display_Responsive' src={circle} alt="" />
            <img className='Display_Responsive' src={circle} alt="" />
            <img className='Display_Responsive' src={circle} alt="" />
            </>
            : 
            <>
            <img  src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            </>
          } 
        </div>
        <img className='Display_Mobile' src={circle} alt="" />
        <img className='Display_Mobile' src={circle} alt="" />
        <i className='material-icons' onClick={
          () => {
            setShowCircles(!showCircles)
          }
        }>menu</i>
      </div>
    </nav>
  )
}

export default NavBar
