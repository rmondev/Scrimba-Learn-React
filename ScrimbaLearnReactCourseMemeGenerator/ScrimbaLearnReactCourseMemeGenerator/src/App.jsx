// import { useState } from 'react'
import Header from '../src/components/Header'
import Main from './components/Main'
// import WindowTracker from './components/WindowTracker'


const App = () => {
  
  // const [show, setShow] = useState(true)


  // const handleClick = () =>{
  //   setShow(prevShow=>!prevShow)
  // }

  return (
    <>

{/* 
      <button
      onClick={handleClick}>
        Toggle Window Tracker</button>


      { show ? <WindowTracker/> : null} */}
      <Header/> 
      <Main/>

    </>
  )
}

export default App
