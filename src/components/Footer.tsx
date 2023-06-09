import { AppBar, Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
      <Container>
        <Box
          sx={{
            my: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="caption">copyright &copy; 2023</Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
