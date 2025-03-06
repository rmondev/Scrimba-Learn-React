import React from 'react'

const LectureStateCounter = () => {

const [count, setCount] = React.useState(0);


 /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */


const handleClickMinus = () => {
    setCount(prevCount => prevCount - 1)

}


const handleClickPlus = () => {
    setCount(prevCount => prevCount + 1)
}

    return (
        <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
            <button onClick={handleClickMinus}className="minus" aria-label="Decrease count">–</button>
            <h2 className="count">{count}</h2>
            <button onClick={handleClickPlus}className="plus" aria-label="Increase count">+</button>
        </div>
    </main>
  )
}

export default LectureStateCounter
