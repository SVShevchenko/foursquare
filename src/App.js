import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { store } from "./store/store";
import history from "./helpers/history";
import RootRouter from './routes/RootRouter';

const App = () => {

  return (
    <Provider store={store}>
      <Router history={history}>
        <RootRouter />
      </Router>
    </Provider>
  );
};

export default App;
