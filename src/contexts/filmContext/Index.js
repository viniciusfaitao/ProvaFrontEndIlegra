import React, { createContext, useState, useEffect } from "react";
import { UseFilms } from "../../services/filmsApi/Api";

export const FilmContext = createContext();

export const FilmContextProvider = (props) => {
  const [films, setFilms] = useState([]);

  const fetchData = async () => {
    const result = await UseFilms();
    setFilms(result);
  };

  useEffect(() => {
    if (films <= 0) {
      fetchData();
    }
  });

  return (
    <FilmContext.Provider value={{ films }}>
      {props.children}
    </FilmContext.Provider>
  );
};
