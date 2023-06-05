import React from "react";
import FilmCard from "./FilmCard";
import { FilmType } from "../types/FilmType";

type Props = {
  films: FilmType[]
}

const FilmsPresentation = (props: Props) => {
  return (
    <div className="container">
      {props.films.map((film) => (
        <div className="column" key={film.id}>
          <FilmCard film={film} />
        </div>
      ))}
    </div>
  );
};

export default FilmsPresentation;
