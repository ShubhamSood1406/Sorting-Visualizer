import React from "react";
import "./Main.css";

function Main({ data, currentIndex, currentNextIndex }) {
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
            backgroundColor:
              currentIndex === index
                ? "#e84a5f"
                : currentNextIndex === index
                ? "#fa7f72"
                : "#bce6eb"
            // backgroundColor: currentNextIndex === index ? "#ec5858" : "#bce6eb",
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
