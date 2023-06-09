import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";

type Props = {};

const news = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

const News = (props: Props) => {
  return (
    <Container sx={{ justifyContent: "center", padding: "20px" }}>
      <Typography variant="h2" textAlign="center" mb="10px">
        News
      </Typography>
      <Grid container spacing={2} maxWidth="lg">
        {news.map((e) => (
          <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: "flex" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {e.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {e.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {e.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                  image={e.image}
                  alt={e.imageLabel}
                />
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News;
