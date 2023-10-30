import React from "react";
import { Link } from "react-router-dom";

export default function FilmListesi(props) {
  // const { movie } = props;
  console.log("props.movies", props.movies);
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <Link to={`/film/${id}`}>Detayları Görüntüle</Link>
    </div>
  );
}
