import React from "react";
import { hot } from 'react-hot-loader';

import Stamp from "./pages/Stamp";
import About from "./pages/About";

type Props = {};
declare const module: any;

const App: React.FC<Props> = () => {
  return (
    <section>
      <Stamp></Stamp>
      <About></About>
    </section>
  );
};

export default hot(module)(App);
