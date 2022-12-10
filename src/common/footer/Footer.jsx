import React from 'react'
import './Footer.css'
import home from '../../Assets/Vector.svg'
import move from '../../Assets/Game.svg'
import sleep from '../../Assets/Moon.svg'
import you from '../../Assets/User.svg'
const Footer = () => {
  return (
    <div className='footer-cont'>
      <div className="home box">
        <img src={home} alt="" />
        <p>Home</p>

      </div>
      <div className="move box">
        <img src={move} alt="" />
        <p>Move</p>

      </div>
      <div className="sleep box">
        <img src={sleep} alt="" />
        <p>Sleep</p>

      </div>
      <div className="you box">
        <img src={you} alt="" />
        <p>Move</p>

      </div>


    </div>
  )
}

export default Footer