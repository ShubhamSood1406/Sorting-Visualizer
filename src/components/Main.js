import React from "react";
import "./Main.css";

function Main({ data }) {
  // var screenWidth = window.outerWidth;
  const barWidth = 700 / data.length;
  return (
    // <div style={{ padding: "10px" }}>
    <div className="container">
      {data.map((size) => (
        <div
          className="bar"
          style={{ height: `${size}px`, width: `${barWidth}px` }}
        >
          {data.length < 20 && <p className="barSizeName">{size}</p>}
        </div>
      ))}
    </div>
    // </div>
  );
}

export default Main;
