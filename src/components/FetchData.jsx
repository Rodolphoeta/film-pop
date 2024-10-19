import React, { useEffect, useState } from "react";

const FetchData = () => {
    const [movies, setMovies] = useState([]); // Estado para armazenar os filmes
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento
    const apiKey = process.env.MOVIE_API_PRIVATE_KEY
    
    const options = {
        method: "GET",
        headers: {
        accept: "application/json",
        Authorization:
        `Bearer ${apiKey}`,
        },
    };

    useEffect(() => {
        fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
        )
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.results); // Armazena os filmes no estado
            setLoading(false); // Atualiza o estado de carregamento
        })
        .catch((err) => console.error(err));
    }, []); // Dependências vazias, para rodar apenas uma vez

    if (loading) {
        return <div>Loading...</div>; // Exibe uma mensagem de carregamento
    }

    return (
        <div className="movies-container">
        {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
            />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Data de lançamento: {movie.release_date}</p>
                <p>Avaliação: {movie.vote_average}</p>
                <p>{movie.overview}</p>
            </div>
            </div>
        ))}
        </div>
    );
    };

    export default FetchData;
