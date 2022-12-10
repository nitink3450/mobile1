import React from 'react'
import './Gratitude.css'
import love from '../../Assets/love.svg'
import upload from '../../Assets/upload.svg'
const Gratitude = () => {
    return (
        <div className='grati-cont'>
            <div className="left">
                <img src={love} alt="" />
                <p className='grat'>Gratitude</p>

            </div>
            <div className="right">
                <img src={upload} alt="" />
            </div>

        </div>
    )
}

export default Gratitude