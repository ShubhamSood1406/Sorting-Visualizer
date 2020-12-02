import React from "react";
import "./Main.css";

function Main({ data, currentIndex }) {
  // var screenWidth = window.outerWidth;
  const barWidth = 700 / data.length;
  return (
    <div className="container">
      {data.map((size, index) => (
        <div
          className="bar"
          style={{
            height: `${size}px`,
            width: `${barWidth}px`,
            backgroundColor: currentIndex === index ? "#b088f9" : "#bce6eb",
          }}
          key={index}
        >
          {data.length < 20 && <p className="barSizeName">{size}</p>}
        </div>
      ))}
    </div>
  );
}

export default Main;
