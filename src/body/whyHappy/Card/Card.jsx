import React from 'react'
import './Card.css'
import leaf from '../../../Assets/leaf.svg'
const Card = ({head,des,src,back}) =>  {
    return (
        <div className='card-cont' style={{background:`${back}`}}>
            <p className='card-head'>{head}</p>
            <p className='card-des'>{des}</p>
            <img src={src} alt="" />
            <div className="tag">
                <img src={leaf} alt="" />
                <p>Think</p>
            </div>
        </div>
    )
}

export default Card