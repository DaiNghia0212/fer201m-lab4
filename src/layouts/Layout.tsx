import { CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  );
};

export default Layout;
