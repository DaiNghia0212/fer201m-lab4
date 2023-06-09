import { Container, Grid, Paper, Typography } from "@mui/material";

type Props = {};

const About = (props: Props) => {
  return (
    <Container maxWidth="md" sx={{ margin: "20px auto" }}>
      <Paper sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">
              Welcome to our group! We are a team of passionate individuals
              dedicated to providing high-quality products and services to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Our mission is to deliver innovative solutions that meet the needs
              of our clients and exceed their expectations. We strive for
              excellence in everything we do and are committed to building
              long-lasting relationships with our customers.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              At our company, we value teamwork, integrity, and continuous
              improvement. We believe that by working together and embracing new
              ideas, we can achieve greatness.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
