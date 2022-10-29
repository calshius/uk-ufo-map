import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import MapChart from "./MapChart";
import IncidentTable from "./IncidentTable";
import ButtonAppBar from "./AppBar";

function App() {
  return (
    <div>
      <ButtonAppBar>
        <IncidentTable />
      </ButtonAppBar>
      <MapChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
