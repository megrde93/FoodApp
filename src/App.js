import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import RandomIngredients from "./components/RandomIngredients";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Landing {...props} />} />
        <Route
          exact
          path="/RandomIngredients"
          component={(props) => <RandomIngredients {...props} />}
        />
        <Route
          exact
          path="/Recipes"
          component={(props) => <Recipes {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
