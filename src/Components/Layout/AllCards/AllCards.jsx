import React from 'react'
import { Card } from '../../UI/Card/Card'
import './AllCards.css'

export const AllCards = ({dataCards}) => {

  return (
    <div className='allCards'>
      {dataCards.map(item=>(
        <Card titleCard={item.title} imageCard={item.images.downsized_medium.url}/>
      ))}
      
    </div>
  )
}
