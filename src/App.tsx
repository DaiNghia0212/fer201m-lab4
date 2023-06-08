import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./router/routes";
// import Navigation from "./components/Navigation";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

import "./App.css";
import Layout from "./layouts/Layout";

const App = () => {
  return (
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
  );
};

export default App;
