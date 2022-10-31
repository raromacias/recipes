import { Formik } from "formik";
import { useState } from "react";
import  styles from './NewRecipe.module.css';
import axios from 'axios';

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

 

  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity}]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };
  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
  
      axios.post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })}

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });
  return (
    <section  className="formcontainer">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-container">

              <input
                placeholder="Title your Recipe!"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                placeholder="Paste an Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
              <br />
              <div className="radio-container">
              <input
                type="radio"
                name="type"
                value="Cook"
                checked={values.type === "Cook" ? "checked" : ""}
                onChange={handleChange}
              />
              {""}
              Cook
              <input
                type="radio"
                name="type"
                value="Bake"
                checked={values.type === "Bake" ? "checked" : ""}
                onChange={handleChange}
              />
              {""}
              Bake
              <input
                type="radio"
                name="type"
                value="Drink"
                checked={values.type === "Drink" ? "checked" : ""}
                onChange={handleChange}
              />
              {""}
              Drink <br />
              </div>
              <div className="input-container">
              <input
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
              <br />
              </div>
              <div className="input-container">
              <div className="ingredient-inputs">
              <input
                placeholder="Ingredient"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              </div>
              <ul>{ingredientDisplay}</ul>
              </div>
              <br />
              <button
                type="button"
                className={styles.orange_btn}
                onClick={addIngredient}
              >Add another</button>
              <br />
              <textarea
                placeholder="What are the Instructions?"
                name="instructions"
                value={values.instructions}
                onChange={handleChange}
              />
              <br />
              <button 
                className="save-btn"
                type="submit"
              >Save</button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
