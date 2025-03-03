import jokesData from '../data/jokesData'
import Joke from './components/Joke'
const App = () => {
  
  const jokeElements = jokesData.map((joke) => {
    return (
      <Joke setup={joke.setup} punchline={joke.punchline}/>
    )
  })

  return (
    <main>
      {jokeElements}
    </main>
  )
}

export default App

