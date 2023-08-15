import React from "react";
//import { Counter } from './features/counter/Counter';
import "./App.sass";
import AstroInfo from "./features/AstroViews/AstroInfo";
import { selectInfo } from "./features/info/infoSlice";
import { useSelector } from "react-redux";

function App() {
  const status = useSelector(selectInfo).status;

  return (
    <div className="App">
      <header>
        <h1 className="page-title">Astrology Birthday Report</h1>
        {status === "idle" && (
          <p>
            A landing page for astrology and weather information for your 2023
            birthday!
          </p>
        )}
      </header>

      <AstroInfo status={status} />

      <footer className="copyright">
        <p>
          <a href="https://github.com/fiddle-leaf" alt="Github page">
            fiddle-leaf
          </a>{" "}
          &copy; 2023.
        </p>
      </footer>
    </div>
  );
}

export default App;
