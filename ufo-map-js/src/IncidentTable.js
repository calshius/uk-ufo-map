import React from "react";
import MUIDataTable from "mui-datatables";
import sightings from "./data/sighting_geos.json";

const columns = [
  {
    name: "id",
    label: "id",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "date",
    label: "date",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "area",
    label: "area",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "town",
    label: "town",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "incident",
    label: "incident",
    options: {
      filter: false,
      sort: false,
    },
  },
];

const options = {
  filterType: "checkbox",
};

const IncidentTable = () => {
  return (
    <div>
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
