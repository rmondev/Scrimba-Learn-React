import React from 'react'

const Main = () => {

  const [ingredients, setIngredients] = React.useState([

  ])
 
  
  const ingredientListItems = ingredients.map(ingredient=>{
    return(
    <li key={ingredient}>{ingredient}</li>
    )
  }) 

  // const handleSubmit = (event) =>{
  //   event.preventDefault()
  //   const formData = new FormData(event.currentTarget)
  //   const newIngredient = formData.get("ingredient")

  //   setIngredients(prevIngredients => [
  //     ...prevIngredients, 
  //     newIngredient
  //   ])
    
    
  // }

  // Submit form data using action attribute instead:

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient") // use name attribute for ingredient input 

    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <main>
      <form className='add-ingredient-form' action={addIngredient}>
        <input 
          type='text'
          name='ingredient'
          placeholder='e.g.oregano'
          aria-label='Add Ingredient'
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
