import React, { useState, useEffect } from 'react'

const WindowTracker = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener("resize", function() {
        setWindowWidth(window.innerWidth)
    })}, [])

  return (
    <h1>Window width: {windowWidth}</h1>
  )
}

export default WindowTracker
