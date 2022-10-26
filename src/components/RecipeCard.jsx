import { NavLink } from "react-router-dom";
const RecipeCard = ({recipe}) => {
    

    return (
        <div className="recipe-card">
            <div>
                <img style={{width:"50px", height: '50px'}} src={`https://pinchofyum.com/wp-content/uploads/Vegan-Vodka-Pasta-Square.jpg`}/>
                {recipe.recipe_name}
            </div>
            <NavLink to={`/recipe/${recipe.recipe_id}`}>See More</NavLink>
           
        </div>
    );
}


export default RecipeCard