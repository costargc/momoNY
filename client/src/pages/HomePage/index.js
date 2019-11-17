import React, { Component } from "react";
import logo from '../../assets/logo.svg';
import "./index.css";

class HomePage extends Component {

  render() {
    return (
      <main className="App">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              momoNY initial setup test page.
              </p>
            <p>
              This is a react project.
              <br></br>
              Go to <code>src/App.js</code> and save to reload.
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
      </main>
    );
  }
}

export default HomePage;