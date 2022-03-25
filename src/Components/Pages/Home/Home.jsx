import React from 'react'
import { AllCards } from '../../Layout/AllCards/AllCards'
import { Search } from '../../UI/Search/Search'
import './Home.css'
export const Home = () => {
  return (
    <div>
        <h1>Gif Finder</h1>
        <Search/>
        <AllCards/>
    </div>
  )
}
