import React from 'react'

const LectureTernaryOperator = () => {

    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    const handleClick = () =>{
        setIsGoingOut(prevState => !prevState)
    }
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button onClick={handleClick} className="value">{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
  
}

export default LectureTernaryOperator
