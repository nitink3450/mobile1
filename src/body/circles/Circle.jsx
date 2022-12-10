import React from 'react'
import './Circle.css'
import clock from '../../Assets/clock.svg'
import gift from '../../Assets/gift.svg'
import circuit from '../../Assets/circuit.svg'
import tree from '../../Assets/tree.svg'
const Circle = () => {
    return (
        <div className='circle-cont'>
            <div className="clock box1">
                <img src={clock} alt="" />
                <p>Daily chec...</p>
            </div>
            <div className="gift box1">
                <img src={gift} alt="" />
                <p>Happiness </p>
            </div>
            <div className="circuit box1">
                <img src={circuit} alt="" />
                <p>Breathing</p>
            </div>
            <div className="tree box1">
                <img src={tree} alt="" />
                <p>Self care</p>
            </div>
        </div>
    )
}

export default Circle