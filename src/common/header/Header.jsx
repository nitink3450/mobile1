import React from 'react'
import './Header.css';
import signal from '../../Assets/Mobile signal.svg';
import wifi from '../../Assets/Wifi.svg';
import battery from '../../Assets/Battery.svg';
const Header = () => {
    return (
        <div className='H-cont'>
            <div className="left"> 
                <p className="time">
                    9:41
                </p>
            </div>
            <div className="right">
                <img className="head-img" src={signal} alt="" />
                <img className="head-img" src={wifi} alt="" />
                <img className="head-img" src={battery} alt="" />
            </div>
        </div>
    )
}

export default Header