import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const DetailScreen = () => {  
  const {id} = useParams()
  const [recipe, setRecipes] = useState([])
    const url = 'https://recipes.devmountain.com'

    useEffect(()=> {
      axios.get(`${url}/recipes/${id}`)
      .then(res=> setRecipes(res.data))
  }, [])

  return (
    <section>
        {recipe.recipe_name}
     </section>
  );
};

export default DetailScreen;
