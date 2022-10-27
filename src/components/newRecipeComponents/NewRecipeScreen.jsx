import React from "react";
import {Formik} from 'formik';

const NewRecipeScreen = () => {
  const initialValues = {
        type: '',
        recipeName: '',
        imageURL: '',
        prepTime: '',
        cookTime: '',
        serves: '',
        instructions: '',
        ingredients: ''
  }
  const onSubmit = (values) => {
    console.log(values)
}
  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
           <div >
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
             name='imageURL'
             />
             <input
             type='radio'
             name='type'
             value="Cook"
             checked={values.type === 'Cook' ? "checked": ''}
             onChange={handleChange}
             />{''}
             Cook <br />
             
             <input
             type='radio'
             name='type'
             value="Bake"
             checked={values.type === 'Bake' ? "checked": ''}
             onChange={handleChange}
             />{''}
             Bake <br />
           </div>
           


          </form>
        )
        }
       








      </Formik>
      </section>
  );
};

export default NewRecipeScreen;
