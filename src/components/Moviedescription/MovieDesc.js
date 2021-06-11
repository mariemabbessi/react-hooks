import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const MovieDesc = ({ match, moviesList }) => {
  const [movie, setMovie] = useState({});
  const history = useHistory();

  useEffect(
    () => setMovie(moviesList.find((el) => el.id === +match.params.movieId)),
    [moviesList, match.params.movieId]
  );
  return (
    <div>
      <div>
        <h1>{movie.name}</h1>
        <iframe
          width="900"
          height="506"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>{movie.description}</p>
      </div>

      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
};
