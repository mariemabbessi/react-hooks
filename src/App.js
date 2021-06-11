import MovieList from "./components/moviesList/MovieList";
import { myMovies } from "./Data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Star from "./components/starComponent/Star";
import { Route } from "react-router-dom";
import { MovieDesc } from "./components/Moviedescription/MovieDesc";

function App() {
  const [Movies, setmyMovie] = useState(myMovies);
  const [inputSearch, setInputSearch] = useState("");
  const [starSearch, setStarSearch] = useState(null);
  return (
    <div className="App">
      <header>
        <input type="text" onChange={(e) => setInputSearch(e.target.value)} />
        <Star rating={starSearch} setStarSearch={setStarSearch} />
      </header>
      {}

      <Route
        exact
        path="/"
        render={() => (
          <MovieList
            myMovies={Movies}
            setmyMovie={setmyMovie}
            inputSearch={inputSearch}
            starSearch={starSearch}
          />
        )}
      />

      <Route
        exact
        path="/description/:movieId"
        render={(props) => <MovieDesc moviesList={Movies} {...props} />}
      />
    </div>
  );
}

export default App;
