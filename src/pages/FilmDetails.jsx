import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom/dist";
import FetchData from "../components/fetchData/FetchData";
import FilmInfo from "../components/film/FilmInfo";

export default function FilmDetails(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();

  return (
    <div>
      <div style={header}>
        <i onClick={() => navigate("/")}>Voltar</i>
        <h1>Movie</h1>
      </div>
      <FetchData
        setData={(dt) => {
          setMovie(dt);
        }}
        route={"3/movie/" + id}
      >
        <FilmInfo data={movie} />
      </FetchData>
    </div>
  );
}

const header = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  justifyContent: "start",
};
