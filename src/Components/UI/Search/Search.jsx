import React from 'react'
import './Search.css'
export const Search = ({cardsGifs}) => {
  return (
    <div className='contentSearch'>
      <input type="search" className='search' placeholder='Write word' onChange={cardsGifs}/>
    </div>
  )
}
