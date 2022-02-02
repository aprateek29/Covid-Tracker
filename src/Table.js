import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <div>
          <span className="first">{country.country}</span>
          <span>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Table;
