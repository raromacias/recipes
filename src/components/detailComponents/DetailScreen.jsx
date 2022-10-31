import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './DetailScreen.modules.css'

const DetailScreen = () => {  
  const {id} = useParams()
  const [recipe, setRecipes] = useState([])
    const url = 'https://recipes.devmountain.com'

    useEffect(()=> {
      axios.get(`${url}/recipes/${id}`)
      .then(res=> setRecipes(res.data))
  }, [])

  return (
    <div>
      <div className='detail_img'>
    <div 
    style={{
      background: `linear-gradient(
        190deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)),
        url(${recipe.image_url})`,
       backgroundSize: 'cover',
        objectPosition: 'center',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'

       
    }}>
      <div>
       <h1 style={{color: '#D97236', fontSize:"xx-large", alignItems: "center"}}>{recipe.recipe_name}</h1>
     </div>
      </div>
    </div>
     
     <br />
     
     <div className='recipeingredientbox'>
      <div className='recipe-container'>
        <h2>Recipe</h2>
        <h4>Prep Time: {recipe.prep_time}</h4>
        <h4>Cook Time: {recipe.cook_time}</h4>
        <h4>Serves: {recipe.serves}</h4>
      <br/>
        <h2>Ingredients</h2>
        {recipe.ingredients && recipe.ingredients.map((ingr, index) => {
          return <h4>{ingr.quantity} {ingr.ingredient}</h4>
        })}
      </div>

     </div>
      <div className='instructions-box'>
        <h2>Instructions</h2>
        <p style={{whiteSpace: 'pre-wrap'}}>
           {recipe.instructions && JSON.parse(recipe.instructions)}
        </p>
      </div>
   
   </div>
     
  );
};

export default DetailScreen;
