import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fn = () => {
    setResult("");
    setIsLoading(true);

    const worker = new SharedWorker("worker.js");
    // for (let i = 0; i < 100; i++) {
    //   // _.chunk(["a", "b", "c", "d"], 2);
    //   console.log(i);
    // }

    // const worker = new Worker("worker.js"); // Create a Worker from the worker.js file
    // worker.onmessage = function (e) {
    //   console.log("finish");
    //   setIsLoading(false);
    //   setResult(e.data);
    // };
    // worker.postMessage("first step"); // Send a message to the Worker (to start execution)

  };

  return (
    <div className="App">
      <header className="App-header">
        {result}
        {isLoading && <img src={logo} className="App-logo" alt="logo" />}
        <button onClick={fn}>Start</button>
      </header>
    </div>
  );
}

export default App;
