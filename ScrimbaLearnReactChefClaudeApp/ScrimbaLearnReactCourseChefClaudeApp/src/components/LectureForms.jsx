import React from 'react'

const LectureForms = () => {


    // using <form> onSubmit attribute

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log('Submitted!')
    //     const formEl = event.currentTarget
    //     const formData = new FormData(formEl)

    //     const email = formData.get("email")
    //     console.log(email)

    //     // Gather the info from the form
    //     // Submit it to a backend
    //     formEl.reset()
    // }

    // Best Practice: Use <form> action attribute instead 

    const signUp = (formData) => {
        // const email = formData.get("email") // use name value on input
        // const password = formData.get('password')
        // const employmentStatus = formData.get('employmentStatus')
        // const dietaryRestrictions = formData.getAll('dietaryRestrictions')
        // const faveColor = formData.get('favColor')
        // console.log(email)
        // console.log(password)
        // console.log(employmentStatus)
        // console.log(dietaryRestrictions)
        // console.log(faveColor)


        // get all form data (does not work for checkboxes, must add them separately (it is an []))
        const data = Object.fromEntries(formData)
        const dietaryRestrictions = formData.getAll('dietaryRestrictions')
        console.log(dietaryRestrictions)

        const allData = {
            ...data,
            dietaryRestrictions
        }
        console.log(allData)
    }


  return (

   
    <section>
        <h1>Signup Form</h1>
        <form action={signUp} method='POST'>
            <label htmlFor='email'>Email:</label>
            <input
            id='email'
            type='email' //radio, email, text etc.
            name='email'
            // Use placeholders for input example, not label
            placeholder='joe@schmo.com'
            />

            <br/>

            <label htmlFor='password'>Password:</label>

            <input
            id='password'
            name='password'
            type='password'
            placeholder=''
            />

            <br/>
            
            <label htmlFor='description'>Description:</label>
            <textarea id='description' name='description' defaultValue='This is a description'></textarea>


            <fieldset>
                <legend>Employment Status</legend>
                <label>
                    <input type='radio' name="employmentStatus" value='unemplpyed'/>
                    Unemployed
                </label>
                <label>
                    <input type='radio' name="employmentStatus" value='part-time'/>
                    Part-time
                </label>
                <label>
                    <input type='radio' name="employmentStatus" value='full-time' defaultChecked={true}/>
                    Full-time
                </label>
            </fieldset>

            <fieldset>
                <legend>Dietary Restrictions</legend>
                <label>
                    <input type='checkbox' name="dietaryRestrictions" value='kosher'/>
                    Kosher
                </label>
                <label>
                    <input type='checkbox' name="dietaryRestrictions" value='vegan'/>
                    Vegan
                </label>
                <label>
                    <input type='checkbox' name="dietaryRestrictions" value='gluten-free' defaultChecked={true}/>
                    Gluten-Free
                </label>
            </fieldset>

            <label htmlFor="favColor">What is Your Favorite Color?</label>
            <select id="favColor" name='favColor' defaultValue=''>
                <option value='' disabled >-- Choose a Color --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button>Submit</button>


            
        </form>
    </section>
  )
}

export default LectureForms
