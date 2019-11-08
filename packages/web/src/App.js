import React from "react";
import { theme } from "common";
import styled, { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const Button = styled.button`
  color: ${props => props.theme.mainColor};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
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

          <Button>This is a button</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
