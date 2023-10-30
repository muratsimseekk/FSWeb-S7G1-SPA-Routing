import React, { useState, useEffect } from "react";
import axios from "axios";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";

import FilmListesi from "./Filmler/FilmListesi";
import { Route, Switch } from "react-router-dom";
import Film from "./Filmler/Film";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          setMovieList(response.data);
          // console.log(response.data);
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  console.log("movieList > ", movieList);
  if (!movieList) {
    return <div>Page is loading , please wait ...</div>;
  }
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <KaydedilenlerListesi
            list={
              [
                /* Burası esnek */
              ]
            }
          />

          <FilmListesi movies={movieList} />
        </Route>
        <Route path="/film/:productID" exact>
          <Film />
        </Route>
      </Switch>
    </div>
  );
}
