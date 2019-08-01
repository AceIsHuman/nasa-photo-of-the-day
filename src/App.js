import React from "react";
import "./App.css";

import TopBar from "./components/TopBar";
import APOD from "./components/APOD/APOD";
import LastTenDays from "./components/LastTenDays/LastTenDays";


function App() {
  return (
    <div className="App">
      <TopBar />
      <APOD />
      <LastTenDays />
    </div>
  );
}

export default App;
