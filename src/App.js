import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RecipesGrid from "./components/RecipesGrid/RecipesGrid";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes/:type" component={RecipesGrid} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
