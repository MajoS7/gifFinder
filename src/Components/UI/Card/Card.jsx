import React from 'react'
import './Card.css'
export const Card = ({titleCard,imageCard}) => {
  return (
    <div className='contentCard'>
      <img src={imageCard} alt={titleCard}  className='cardImage'/>
      <h2 className='text_rosa'>{titleCard}</h2>
    </div>
  )
}
