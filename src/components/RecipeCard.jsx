import { NavLink } from "react-router-dom";
const RecipeCard = ({recipe}) => {
    

    return (
        <div className="recipe-card" >
            <div>
                <img  style={{height: '100px', width: '100px' }} src={`${recipe.image_url}`}/>
                {recipe.recipe_name}
            </div>
            <NavLink to={`/recipe/${recipe.recipe_id}`}>See More</NavLink>
           
        </div>
    );
}


export default RecipeCard