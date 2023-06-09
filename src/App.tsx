import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./router/routes";
// import Navigation from "./components/Navigation";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

import "./App.css";
import Layout from "./layouts/Layout";
import { ColorModeContext } from "./contexts/ColorModeContext";

const App = () => {
  const { mode } = React.useContext(ColorModeContext);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Layout>
          <Switch>
            {routes.map((route) => (
              <Route path={route.path} component={route.component} exact />
            ))}
          </Switch>
        </Layout>
        {/* <Navigation />
      <Main />
      <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
