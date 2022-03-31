import React, { useState } from "react";

import Header from "./components/Header";
import "./App.css";

function App() {
  let [name] = useState("Marc");
  let [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h1>State testing</h1>
      <Header myName={name} subtitle="Amazing app" />
      <h3>HEY! {name} how are you?</h3>
      <hr />
      <h1>Counter value: {counter}</h1>
      <button onClick={increment}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
