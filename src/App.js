import React, { useState } from "react";

import Header from "./components/Header";
import "./App.css";

function App() {
  let [name] = useState("Marc");
  return (
    <div>
      <h1>State testing</h1>
      <Header subtitle="Amazing app" />
      <h3>HEY! {name} how are you?</h3>
    </div>
  );
}

export default App;
