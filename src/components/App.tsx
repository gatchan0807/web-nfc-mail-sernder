import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Stamp from "./pages/Stamp";
import About from "./pages/About";
import { route } from "../constants/routes";

type Props = {};
declare const module: any;

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={route.HOME} component={About}></Route>
        <Route exact path={route.STAMP} component={Stamp}></Route>
        <Route exact path={route.ABOUT} component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default hot(module)(App);
