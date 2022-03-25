import React,{useState} from 'react'
import { AllCards } from '../../Layout/AllCards/AllCards'
import { Search } from '../../UI/Search/Search'
import './Home.css'
import axios from 'axios';

export const Home = () => {
  
  const [cards, setCards] = useState([]);
  const URL = "https://api.giphy.com/v1/stickers/search?";
  const api_key = "api_key=o5TmcMIUkgEHbU32UOuJBXKwC8SgcQQ3";
  const query = "&q="
  const limit = "&limit=16";

  const gifsCards = (event) => {
    axios.get(`${URL}${api_key}${query}${encodeURI(event.target.value)}${limit}`)    
    .then(response => {
      setCards(response.data.data)   
    })
    .catch(error => {
      console.log(error);
    })
  }


  return (
    <div>
        <h1 className='titule'>Gif Finder</h1>
        <Search cardsGifs={gifsCards}/>
        <AllCards dataCards={cards}/>
    </div>
  )
}
