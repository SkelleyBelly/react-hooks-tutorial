import React from "react";
import {
  Counter,
  CounterWithData,
  CounterWithShout,
  CounterWithReducer
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route exact path="/data" component={CounterWithData} />
            <Route exact path="/shout" component={CounterWithShout} />
            <Route exact path="/reducer" component={CounterWithReducer} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
