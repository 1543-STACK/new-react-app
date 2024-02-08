import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <h1>Weather App </h1>
      <Weather />
        <footer>
        This project is coded by{" "}
        <a
          href="https://github.com/1543-STACK/new-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Anu Govender
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/1543-STACK/new-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
           </a>{" "}
          and{" "}
          <a
            href="https://graceful-salmiakki-5ebd89.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
      </footer>
    </div>
  );
}
  
  


