import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pallete from "./appColours/ColourPalete";
import style from "./appColours/themes.module.css";
import "./styles.css";

import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import FilmList from "./pages/FilmList";
import FilmList2 from "./pages/FilmList2";
import FilmDetails from "./pages/FilmDetails";


export default function App() {
  return (
    <Router>
      <div className={style.Dark} style={AppStyle}>
        <Header/>
        <Routes>
          <Route path="/" exact element={<FilmList/>}/>
          <Route path="/list" exact element={<FilmList />} />
          <Route path="/list2" exact element={<FilmList2 />} />

          <Route path="/login" exact element={<Login/>}/>
          <Route path="/movie/:id" exact element={<FilmDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
const AppStyle = {
  backgroundColor: Pallete.primary,
  color: Pallete.text,
  minHeight: "100vh",
};


