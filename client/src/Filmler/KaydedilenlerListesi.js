import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <Link to={`/film/${props.list.id}`}>Kaydedilen Filmler : </Link>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <NavLink to="/" className="home-button">
        {" "}
        Anasayfa
      </NavLink>
    </div>
  );
}
