import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import markers from "./data/sighting_geos.json";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-kingdom/uk-counties.json";

const MapChart = () => {
  return (
    <div>
      <ComposableMap
        projection="geoAlbers"
        projectionConfig={{
          rotate: [4.4, 0],
          center: [1, 57.4],
          parallels: [50, 0],
          scale: 2500,
        }}
        fill="black"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="white"
                  strokeWidth="0.1"
                  style={{
                    default: { fill: "#06F" },
                    hover: { fill: "#04D" },
                    pressed: { fill: "#02A" },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ id, area, coordinates, date, incident }) => (
            <Marker
              key={id + "-" + date + "-" + area}
              coordinates={[coordinates[1], coordinates[0]]}
            >
              <circle r={0.5} fill="#F00" />
              <text
                textAnchor="middle"
                y="3"
                style={{
                  fontFamily: "system-ui",
                  fill: "orange",
                  fontSize: "1",
                }}
              >
                {date + "-" + area}
              </text>
            </Marker>
          ))}
          ;
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
