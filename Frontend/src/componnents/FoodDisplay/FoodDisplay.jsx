import React from 'react'
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = (category) => {
    const{food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <p>asdas</p>
    
    </div>
  )
}

export default FoodDisplay