import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";

const App: React.FC = () => {
  const [greeting, setGreeting] = useState("default button text");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsxs</code> and save to reload.
        </p>
        <Button
          text={greeting}
          onClick={(e: any) => setGreeting("you clicked me!")}
        />
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
};

export default App;
