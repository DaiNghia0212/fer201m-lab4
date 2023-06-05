import React from "react";
import { FilmType } from "../types/FilmType";
import Modal from "./Modal";

type Props = {
  film: FilmType;
};

const FilmCard = (props: Props) => {
  const { film } = props;
  return (
    <div className="card">
      <img src={film.image} alt={film.title} />
      <h3 className="title">{film.title}</h3>
      <p className="nation">{film.nation}</p>
      <p className="year">{film.year}</p>
      <Modal title={film.title} description={film.detail}>
        Detail
      </Modal>
    </div>
  );
};

export default FilmCard;
