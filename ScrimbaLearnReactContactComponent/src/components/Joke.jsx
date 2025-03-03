export default function Joke(props) {
    return (
        <>
            {props.joke.setup && <p className='setup'>Setup: {props.joke.setup}</p>}
            <p className='punchline'>Punchline: {props.joke.punchline}</p>
            <p>{props.upvotes}</p>
        </>
    )

};