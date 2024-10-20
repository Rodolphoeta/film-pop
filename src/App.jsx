import FetchData from "./components/FetchData";
import Movies from "./components/Movies";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Movies />
      <FetchData />
    </div>
  );
}

export default App;
