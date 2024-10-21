import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom/dist";
import FetchData from "../components/fetchData/FetchData";
import FilmThumbnail from "../components/film/filmThumbnail";
import ControlBar from "../components/controlBar/ControlBar";
import TextButton from "../components/inputs/textButton/TextButton";

export default function FilmList(props) {
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
      <h1> All Movies</h1>
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
            <FilmThumbnail data={movie} key={"flim-info" + i} />
          ))}
        </div>
      </FetchData>

      <ControlBar>
          <TextButton highlight onClick={()=>setPage(page-1)}> « </TextButton>
          {page}/{totalPages}
          <TextButton highlight onClick={()=>setPage(page+1)}> » </TextButton>
      </ControlBar>
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
  alignItems: "center",
  justifyContent: "center",
};
