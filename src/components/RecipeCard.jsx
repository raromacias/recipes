import { NavLink } from "react-router-dom";
import './RecipeCard.modules.css'

const RecipeCard = ({recipe}) => {
    

    return (
        <div className="recipe-card" >
            <div className="image-card">
                <img className="recipeimg"  src={`${recipe.image_url}`}/>
                {recipe.recipe_name}
            </div>
            <button className="see_more" >
            <NavLink to={`/recipe/${recipe.recipe_id}`}>See More</NavLink>
            </button>
        </div>
    );
}


export default RecipeCard