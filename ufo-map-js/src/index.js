import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import MapChart from "./MapChart";
import IncidentTable from "./IncidentTable";

function App() {
  return (
    <div>
      <MapChart />
      <IncidentTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
