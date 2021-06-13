import React, { Component } from "react";
import Home from "./containers/HomeScreen/Home";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Results from "./containers/Results/Results";
import Data from "./containers/Data/Data";

export default class Main extends Component {
 
  render() {
    return (
      <HashRouter>
        <div>
          <header className="MainPageHeader">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
              alt="Heart logo" className="HeartLogo" />
            <h1 className="MainH1">Heart Disease Prediction</h1>
          </header>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li className="results"><NavLink to="/results">Results</NavLink></li>
            <li><NavLink to="/data">Data Visualization</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/results" component={Results} />
            <Route path="/data" component={Data} />
          </div>
        </div>
      </HashRouter>
    );
  }
}