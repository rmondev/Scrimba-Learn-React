import React from 'react'

const Main = () => {

  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  
  const ingredientListItems = ingredients.map(ingredient=>{
    return(
    <li key={ingredient}>{ingredient}</li>
    )
  }) 

  const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredients.push(newIngredient)
    console.log(ingredients)
  }

  return (
    <main>
      <form className='add-ingredient-form' onSubmit={handleSubmit}>
        <input 
          aria-label='Add Ingredient'
          type='text'
          placeholder='e.g.oregano'
          name='ingredient'
        />
        
        <button>
          Add Ingredient
        </button>
      </form>
      
      <ul>
        {ingredientListItems}
      </ul>

    </main>
  )
}

export default Main
