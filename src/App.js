import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  </Provider>
);
export default App;
