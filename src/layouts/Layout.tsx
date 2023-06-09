import { CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
