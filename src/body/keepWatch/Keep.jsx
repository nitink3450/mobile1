import React from 'react'
import './Keep.css'
import sound from '../../Assets/Sound.svg';
import play from '../../Assets/play.svg';
import back from '../../Assets/backgroundKeep.svg';
const Keep = () => {
    return (
        <div className='keep-cont'>
            <div className="text">
                <p className='keepText marginBotton'>KEEP WATCHING</p>
                <p className='practiceText marginBotton'>How to practice gratitude</p>
                <div className='Course marginBotton'>
                    <img src={sound} alt="" />
                    <p>Course.35 min</p>
                </div>

            </div>
            <div className="button">
                <div className="left-b">
                    <img src={play} alt="" />
                </div>
                <div className="right-b">
                    <p className='lesson'>Lesson 2</p>
                    <p className='when'>When (and why)...</p>

                </div>

            </div>
            <div className="back-img">
                <img src={back} alt="" />
            </div>

        </div>
    )
}

export default Keep