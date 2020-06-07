import React from "react";
import { Route, Switch } from "react-router-dom";

// Style Global
import "assets/scss/style.scss";

// Component Page
import HomePage from "pages/HomePage";
import ProductPage from "pages/ProductPage";
import DetailsPage from "pages/DetailsPage";
import ErrorPage from "pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/product/:slugProduct" component={ProductPage}></Route>
        <Route
          path="/item-details/:slugItemDetails"
          component={DetailsPage}
        ></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
