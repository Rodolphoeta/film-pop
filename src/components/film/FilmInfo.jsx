import React, { useEffect, useState } from "react";
import ApiService from "../../Services/ApiService";

export default function FilmInfo(props) {
  const movie = props.data;

  if (movie == undefined) {
    return <>.</>;
  }
  return (
    <div key={movie.id} style={{ margin: "10px" }}>
      <img
        src={ApiService.getPosterUrl(movie.poster_path, 500)}
        alt={movie.title}
        style={{ width: "200px", height: "300px" }}
      />
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
}
