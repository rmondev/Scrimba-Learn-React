import {useState, useEffect} from 'react';

const Main = () => {


    const [starWarsData, setStarWarsData] = useState('')
    const [count, setCount] = useState(1)
    
    console.log("Rendered!")


    // ReactDOM.useEffect(callback function ()=>, dependency array [])
    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${count}`) // Get call to database
        .then(response=> response.json())
        .then(responseJSONData => setStarWarsData(responseJSONData))
    },[count])

    // const [meme, setMeme] = useState({
    //     topText: "One does not simply",
    //     bottomText: "Walk into mordor",
    //     imageUrl: "http://i.imgflip.com/1bij.jpg",

    // })

    // const handleChange = (e) => {
    //     const {value, name} = e.currentTarget
    //     setMeme(prevName => ({
    //         ...prevName,
    //         [name]: value
    //     }))
    // }

   
    return (

        <div>
            <h1>The Count is {count}</h1>
            <button onClick={()=>setCount(prevCount=> prevCount+1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            
           
        </div>

        // <main>
        //     <div className='form'>
        //         <label>Top Text:
        //             <input
        //              type='text'
        //              name="topText"
        //              placeholder={meme.topText}
        //              onChange={handleChange}
        //              value={meme.topText}
        //             />

        //         </label>
        //         <label>Bottom Text:
        //             <input
        //              type='text'
        //              name="bottomText"
        //              placeholder={meme.bottomText}
        //              onChange={handleChange}
        //              value={meme.bottomText}
        //             />
        //         </label>
        //         <button>Get a new meme image 🖼</button>
        //     </div>
            
        //     <div className='meme'>
        //         <img src={meme.imageUrl}/>
        //         <span className='top'>{meme.topText}</span>
        //         <span className='bottom'>{meme.bottomText}</span>
        //     </div>
            
        // </main>
    )
}

export default Main  