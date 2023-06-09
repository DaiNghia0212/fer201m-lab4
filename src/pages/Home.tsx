import FilmsList from "../components/FilmsList";
import { Films as films } from "../data/ListOfFilms";
import { Container, Typography } from "@mui/material";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container>
      <Typography variant="h2" textAlign="center" mb="10px">
        Films
      </Typography>
      <FilmsList films={films} />
    </Container>
  );
};

export default Home;
