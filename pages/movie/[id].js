import movies from '../../movies.json'

const Movie = props => {
    
    return(
        <div>
            <h1>{props.Movie.title}</h1>
            <p>{props.Movie.content}</p>
        </div>
    )
}
Movie.getInitialProps = ({query}) => {
    return{
        Movie: movies[query.id]
    }
}
export default Movie