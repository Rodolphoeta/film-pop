import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom/dist";
import FetchData from "../components/fetchData/FetchData";
import FilmCard from "../components/filmCard/FilmCard";

export default function FilmList2(props) {
  const [movies, setMovies] = useState([]);
  const [page, _setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const setPage = (p) =>{
    if(p > 0 && p < totalPages){
      _setPage(p)
    }
  }

  return (
    <div style={pageStyle} key={page}>
      <h1> Filmes 2</h1>
      <FetchData
        setData={(dt) => {
          setMovies(dt.results);
          setPage(dt.page);
          setTotalPages(dt.total_pages);
        }}
        queryParams={{
          include_adult: false,
          sort_by: "popularity.desc",
          language: "en_US",
          include_video: false,
          page: page,
        }}
        route={"3/discover/movie"}
      >
        <div style={filmStyle}>
          {movies.map((movie, i) => (
            <FilmCard data={movie} key={"flim-info" + i} />
          ))}
        </div>
      </FetchData>
    </div>
  );
}
const pageStyle={
    display: 'flex',
    flexDirection: 'column',
    gap: '2vh',
    alignItems: 'center',
    justifyContent:'center'
}
  
const filmStyle = {
display: "flex",
flexFlow: "row wrap",
gap: '20px',
alignItems: "center",
justifyContent: "center",
};

