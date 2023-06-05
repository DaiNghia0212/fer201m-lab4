import React, { useState } from "react";
import FilmsPresentation from "./FilmsPresentation";
import { Films } from "../data/ListOfFilms";

const Main = () => {
  const [films] = useState(Films);
  return <FilmsPresentation films={films} />;
};

export default Main;
