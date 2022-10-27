import React from "react";
import MUIDataTable from "mui-datatables";
import sightings from "./data/sighting_geos.json";

const columns = [
  {
    name: "id",
    label: "ID",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "date",
    label: "Date",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "area",
    label: "Area",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "town",
    label: "Town",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "incident",
    label: "Incident",
    options: {
      filter: false,
      sort: false,
    },
  },
];

const options = {
  filterType: "dropdown",
  selectableRows: false,
  responsive: "scroll",
  resizableColumns: true,
  print: false,
};

const IncidentTable = () => {
  return (
    <div style={{ display: "table", tableLayout: "fixed", width: "100%" }}>
      <MUIDataTable
        title={"Sightings"}
        data={sightings}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default IncidentTable;
