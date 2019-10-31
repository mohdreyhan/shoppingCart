import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Component/MainPage";
import AboutPage from "./Component/AboutPage";
import LandingPage from "./Component/LandingPage";
import CartPage from "./Component/CartPage";

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={MainPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/CartPage" component={CartPage} />
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
