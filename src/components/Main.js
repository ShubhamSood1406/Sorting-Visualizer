import React from "react";
import "./Main.css";

function Main({ data }) {
  const barWidth = 700 / data.length;
  return (
    // <div style={{ padding: "10px" }}>
    <div className="container">
      {data.map((size) => (
        <div
          className="bar"
          style={{ height: `${size}px`, width: `${barWidth}px` }}
        >
          {" "}
          <p>{size}</p>
        </div>
      ))}
    </div>
    // </div>
  );
}

export default Main;
