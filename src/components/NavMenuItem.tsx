import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";

type Props = {
  name: string;
  href: string;
  onClick?: () => void;
  active?: boolean;
};

const NavMenuItem = (props: Props) => {
  const { name, href, onClick, active } = props;
  return (
    <Link to={href} style={{ textDecoration: "none", color: "inherit" }}>
      {active ? (
        <MenuItem
          key={name}
          onClick={onClick}
          sx={{ borderBottom: "1px solid" }}
        >
          <Typography variant="button" textAlign="center">
            {name}
          </Typography>
        </MenuItem>
      ) : (
        <MenuItem key={name} onClick={onClick}>
          <Typography variant="button" textAlign="center">
            {name}
          </Typography>
        </MenuItem>
      )}
    </Link>
  );
};

export default NavMenuItem;
