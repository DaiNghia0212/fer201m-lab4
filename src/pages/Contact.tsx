import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="md" sx={{ margin: "20px auto" }}>
      <Paper sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              onSubmit={handleSubmit}
            >
              <TextField label="Name" variant="outlined" />
              <TextField label="Email" variant="outlined" />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              For any inquiries or assistance, please feel free to reach out to
              us using the contact information provided below:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Email: example@example.com</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Phone: 123-456-7890</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Address: 123 Main Street, City, State, Country
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Contact;
