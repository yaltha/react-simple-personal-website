import "./App.scss";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
// import works from "./works.json";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">
          <p>
            Jaydon<span className="bold">Arcand</span>
          </p>
        </Link>
        <div className="right-navbar">
          <div className="menu-list">
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
          <Link to="/works" className="button">
            <span>
              <i class="fas fa-briefcase"></i>
            </span>{" "}
            my works
          </Link>
          <button className="button-bars">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
