import React, { useState, useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./Header.css";
import Main from "./Main";

function Header() {
  const [size, setSize] = useState(5);

  const [arr, setArr] = useState(
    Array.from({ length: 5 + 1 }, () => Math.floor(Math.random() * 100))
  );

  const handleSliderChange = (event, newValue) => {
    setSize(newValue);
  };

  useEffect(() => {
    const randomArr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 500)
    );
    console.log("Arr -> arr", arr);
    setArr(randomArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  function click() {
    console.log("Great Shot!");
  }
  return (
    <div>
      <div className="heading">
        <div className="webName">
          <h2> Sorting Visualizer </h2>
          <h5> by Shubham</h5>
        </div>
        <button onClick={click}> Generate New Array </button>

        <div className="range-wrapper">
          <p> Select Array Range </p>
          <Slider
            style={{ color: "#bce6eb", margin: "15px" }}
            value={typeof size === "number" ? size : 5}
            onChange={handleSliderChange}
            min={5}
            max={100}
          />
          <p style={{ margin: "10px" }}> {size} </p>
        </div>

        <div className="sort-wrapper">
          <button onClick={click}> Insertion Sort </button>
          <button onClick={click}> MergeSort </button>
          <button onClick={click}> Quick Sort </button>
        </div>
      </div>

      <Main data={arr} />
    </div>
  );
}

export default Header;
