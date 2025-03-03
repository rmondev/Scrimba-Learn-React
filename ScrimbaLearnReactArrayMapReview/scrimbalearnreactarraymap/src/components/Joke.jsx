const Joke = (props) => {
    return (
        <div>
            <h1>{props.setup}</h1>
            <h2>{props.punchline}</h2>
        </div>
    )
}

export default Joke;