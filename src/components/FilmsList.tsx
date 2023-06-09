import FilmCard from "./FilmCard";
import { FilmType } from "../types/FilmType";
import { Grid } from "@mui/material";

type Props = {
  films: FilmType[];
};

const FilmsList = (props: Props) => {
  return (
    <Grid container columnSpacing={4} justifyContent="center" px="20px">
      {props.films.map((film) => (
        <Grid item xs={12} md={6} lg={4} key={film.id} my="20px">
          <FilmCard film={film} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FilmsList;
