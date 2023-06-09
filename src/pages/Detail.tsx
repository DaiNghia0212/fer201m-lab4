import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Films as films } from "../data/ListOfFilms";

type Props = {};

const Detail = (props: Props) => {
  const params = useParams<{ id: string }>();
  const film = films.find((film) => film.id === params.id);

  return (
    <Container sx={{ margin: "20px auto" }}>
      {film && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} >
            <img src={film.image} alt={film.title} width="100%"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography my="10px" variant="h4">
                  {film.title}
                </Typography>
                <Typography my="10px" variant="h5">
                  {film.nation}
                </Typography>
                <Typography my="10px" variant="h5">
                  {film.year}
                </Typography>
                <Typography my="10px" variant="body1">
                  {film.detail}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Detail;
