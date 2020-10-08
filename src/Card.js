import React from 'react'
import './Card.css'

const Card = ({cardInfo}) => {
    return (
        <div className="card">
            {cardInfo}
        </div>
    )
}

export default Card
