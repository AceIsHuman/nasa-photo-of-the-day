import React, { useState } from "react";
import "./App.css";

import TopBar from "./components/TopBar";
import APOD from "./components/APOD/APOD";


function App() {
  return (
    <div className="App">
      <TopBar />
      <APOD />
    </div>
  );
}

export default App;
