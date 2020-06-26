import React from "react";
import logo from "../../logo.svg";
import "./App.css";
// import SearchBar from "/Users/bleb/DEV/school/codeCademy/ravenous/src/components/SearchBar/SearchBar.js";
import SearchBar from "./../SearchBar/SearchBar";
import Business from "./../Business/Business.css";
import BusinessList from "./../BusinessList/BuisnessList.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
