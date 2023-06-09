import React from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ColorMode from "./ColorMode";
import NavMenuItem from "./NavMenuItem";

const items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <ColorMode />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ ".MuiDrawer-paper": { width: "150px" } }}
            >
              {items.map((page) => (
                <NavMenuItem
                  name={page.name}
                  href={page.href}
                  onClick={handleCloseNavMenu}
                />
              ))}
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              {items.map((page) => (
                <NavMenuItem
                  name={page.name}
                  href={page.href}
                  onClick={handleCloseNavMenu}
                />
              ))}
            </Box>
            <ColorMode />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
