import React from 'react'
import './Why.css';
import arrow from '../../Assets/arrow.svg'
import Card from './Card/Card';
import ballon from '../../Assets/ballon.svg';
import flag from '../../Assets/flag.svg';
const Why = () => {
    return (
        <div className='why-cont'>
            <div className="head">
                <p className='happienesText'>Why happiness?</p>
                <div className="rightSide">
                    <p className='deepDive'>Deep dive</p>
                    <img src={arrow} alt="" />
                </div>

            </div>
            <div className="cards">
                <Card head="Why happines is a
                choice" des="Article  ·  2 min read" src={ballon} back="#B4DADA" />
                <Card head="Do and don’ts to be happy" des="Short · 1 min" src={ballon} back="#F2C7B1" />
            </div>

        </div>
    )
}

export default Why