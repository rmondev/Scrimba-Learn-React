import React from 'react'

const Main = () => {

  const [ingredients, setIngredients] = React.useState([
    
  ])
 
  
  const ingredientListItems = ingredients.map(ingredient=>{
    return(
    <li key={ingredient}>{ingredient}</li>
    )
  }) 

  const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")

    setIngredients(prevIngredients => [
      ...prevIngredients, 
      newIngredient
    ])
    
    
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
