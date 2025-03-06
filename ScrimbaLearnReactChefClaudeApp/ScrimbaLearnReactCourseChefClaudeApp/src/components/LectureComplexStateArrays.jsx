import React from 'react'

const LectureComplexStateArrays = () => {

  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

  
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings(
        prevFaveThings => [
            ...prevFaveThings, 
            allFavoriteThings[prevFaveThings.length]
        ]
    )
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}

export default LectureComplexStateArrays
