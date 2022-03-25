import React from 'react'
import './Card.css'
export const Card = ({titleCard,imageCard}) => {
  return (
    <div className='contentCard'>
      <div className='contentImage'>
        <img src={imageCard} alt={titleCard}  className='cardImage'/>
      </div>
      
      <h2 className='text_rosa'>{titleCard}</h2>
    </div>
  )
}
