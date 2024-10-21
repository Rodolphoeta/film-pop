import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";
import { transform } from "typescript";

export default function FilmThumbnail(props) {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();

  const movie = props.data;

  return (
    <img
      onClick={() => navigate("/movie/" + movie.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src={ApiService.getPosterUrl(movie.poster_path, 300)}
      alt={movie.title}
      style={imgStyle(hover)}
    />
  );
}
const imgStyle = (hover) => {
  return {
    width: "200px",
    height: "300px",
    border: hover ? "2px solid var(--highlight)" : "2px solid transparent",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-out",
    zIndex: hover ? "2" : "1",
    //transform: hover ? "scale(1.1)" : "scale(1)",
  };
};
