import React from "react";
import ReactDom from "react-dom";
import "./index.less";

function App() {
  console.log("Hello world! Hello PHP!");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webpack5 + React + TypeScript!</h1>
        <span>Hello world!</span>
      </header>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
