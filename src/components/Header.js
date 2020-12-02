import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import "./Header.css";
import Main from "./Main";
// import bubbleSort from "./SortingAlgo/bubbleSort";
import insertionSort from "./SortingAlgo/insertionSort";
import sleep from "./sleep";

function Header() {
  const [size, setSize] = useState(5);
  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNextIndex, setCurrentNextIndex] = useState(null);

  const handleSliderChange = (event, newValue) => {
    setSize(newValue);
  };

  useEffect(() => {
    const randomArr = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 500) + 30
    );
    console.log("Arr -> arr", arr);
    setArr(randomArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const generateRandomList = () => {
    const randomArr = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 500) + 30
    );
    console.log("Generated New Arr -> arr", arr);
    setArr(randomArr);
  };

  // const bubbleOnClick = () => {
  //   console.log("B Original array before Sorting ->", arr);
  //   const sortedArr = bubbleSort(arr);
  //   const returnedArr = [...sortedArr];
  //   setArr(returnedArr); // to pass the exact same state of returned array to setArr
  //   console.log("B Sorted Array ->", returnedArr);
  //   console.log("B Original array after Sorting ->", arr);
  // };

  const bubbleOnClick = async () => {
    console.log("B Original array before Sorting ->", arr);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      setCurrentIndex(i);
      for (let j = 0; j < len - i; j++) {
        // setCurrentIndex(j);

        if (arr[j] > arr[j + 1]) {
          setCurrentNextIndex(j + 1);
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }

        setArr([...arr]);
      }

      await sleep(5000 / arr.length);
    }
    setCurrentIndex(null);
    setCurrentNextIndex(null);
    console.log("B Original array after Sorting ->", arr);
  };

  const insertionOnClick = () => {
    console.log("I Original array before Sorting ->", arr);
    const sortedArr = insertionSort(arr);
    const returnedArr = [...sortedArr];
    setArr(returnedArr); // to pass the exact same state of returned array to setArr
    console.log("I Sorted Array ->", returnedArr);
    console.log("I Original array after Sorting ->", arr);
  };

  function click() {
    console.log("Great Shot!");
  }

  return (
    <div>
      <div className="heading">
        <div className="webName">
          <h2> Sorting Visualizer </h2>
          <h5> by Shubham </h5>
        </div>

        <div className="separator"></div>

        <div className="randomList">
          <button onClick={generateRandomList}> Generate New Array </button>
        </div>

        <div className="separator"></div>

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

        <div className="separator"></div>

        <div className="sort-wrapper">
          <button onClick={bubbleOnClick}> Bubble Sort </button>
          <button onClick={insertionOnClick}> Insertion Sort </button>
          <button onClick={click}> Merge Sort </button>
          <button onClick={click}> Quick Sort </button>
        </div>
      </div>

      <Main
        data={arr}
        currentIndex={currentIndex}
        currentNextIndex={currentNextIndex}
      />
    </div>
  );
}

export default Header;
