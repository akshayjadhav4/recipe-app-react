import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <SearchBox/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
