import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import './App.css';
import LandingPage from "../src/LandingPage/LandingPage";
import HomePage from "../src/HomePage/HomePage"; 

function App() {
  return (
    <Router> 
      <div className="App">
        <Route path="/" exact component={LandingPage} /> 
        <Route path="/home" component={HomePage} /> 
      </div>
    </Router>
  );
}

export default App;
