import React from 'react'
import AdBanner from './AdBanner'
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../RecipeCard';

const HomeScreen = () => {  
  const [recipes,setRecipes] = useState([]);
  const [inputText, setInputText] = useState([]);
    const getRecipes =() => {
        axios.get(`https://recipes.devmountain.com/recipes`)
    .then((res) => {
        setRecipes(res.data)
        console.log(res.data);
        })};

useEffect(() => {
    getRecipes()
})
  return (
    <div className='home'>
      <AdBanner />
      <input type="text" placeholder='Search for a recipe' />
      <div className='recipe-container'>
      {recipes.map(recipe=> <RecipeCard recipe={recipe}/>)}
      </div>
    </div>
  )
}

export default HomeScreen