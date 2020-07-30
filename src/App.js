import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RecipesGrid from "./components/RecipesGrid/RecipesGrid";
import RecipeView from "./components/RecipeView/RecipeView";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes/:type" component={RecipesGrid} />
          <Route exact path="/viewRecipe" component={RecipeView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
