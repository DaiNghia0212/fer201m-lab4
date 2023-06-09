import React from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorMode = () => {
  const { mode, toggleColorMode } = React.useContext(ColorModeContext);

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ColorMode;
