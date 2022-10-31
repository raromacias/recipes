import { useState } from "react";
import RecipeCard from "../RecipeCard";
import {BiSearchAlt2} from "react-icons/bi"

const RecipeContainer = ({recipes}) => {
    const [inputText, setInputText] = useState(''); 
    
    const recipeDisplay = recipes.filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let inputTextParams = inputText.toLowerCase()
        return title.includes(inputTextParams)
      }).map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
      })

      return(
        <div className='recipe-section'>
      <div className='search-bar'>
      <BiSearchAlt2 size='3em' color="#DA7635"/>
      <input value={inputText} type="text" placeholder='Search for a recipe' onChange={(e)=> setInputText(e.target.value)}/>
      </div>
      <div className='homerecipes'>
      {recipeDisplay ? recipeDisplay: <h2>No Recipes</h2>}
      </div>
      </div>
      )
}
export default RecipeContainer;