import { Link } from "react-router-dom";
import { FilmType } from "../types/FilmType";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  film: FilmType;
};

const FilmCard = (props: Props) => {
  const { film } = props;

  return (
    <Card
      sx={{
        maxWidth: { xs: 300, sm: 500, md: 400, lg: 350 },
        borderRadius: "15px",
        margin: "auto",
      }}
    >
      <CardMedia
        sx={{ height: { xs: 400, sm: 800, md: 600, lg: 500 } }}
        image={film.image}
        title={film.title}
      />
      <CardContent>
        <Typography my="10px" variant="h4" textAlign="center">
          {film.title}
        </Typography>
        <Typography my="10px" variant="h5" textAlign="center">
          {film.nation}
        </Typography>
        <Typography my="10px" variant="h5" textAlign="center">
          {film.year}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/detail/${film.id}`}>
          <Button variant="contained">Detail</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default FilmCard;
