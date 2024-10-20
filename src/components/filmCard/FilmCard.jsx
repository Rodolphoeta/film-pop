import style from './FilmCard.module.css'


export default function FilmCard(props){
    const movie = props.data;
    return(
        <div key={movie.id} className={style.Card}>
        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={style.Image}
        />
        <div className={style.Info}>
            <h3>{movie.title}</h3>
            <p>Data de lançamento: {movie.release_date}</p>
            <p>Avaliação: {movie.vote_average}</p>
            <p>{movie.overview}</p>
        </div>
        </div>
    )
}