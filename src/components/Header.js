import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import "./Header.css";
import Main from "./Main";
import mergeSort from "./SortingAlgo/mergeSort";
import sleep from "./sleep";

function Header() {
  const [btnState, setBtnState] = useState(0);
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
    setBtnState(1);
    console.log("B Original array before Sorting ->", arr);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      setCurrentIndex(i);

      for (let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          setCurrentNextIndex(j + 1);
        }
        // setArr([...arr]);
      }
      await sleep(5000 / arr.length);
    }
    setCurrentIndex(null);
    setCurrentNextIndex(null);
    console.log("B Original array after Sorting ->", arr);
    setBtnState(0);
  };

  const selectionOnClick = async () => {
    setBtnState(1);
    console.log("S Original array before Sorting ->", arr);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      setCurrentIndex(i);
      for (let j = i + 1; j < len; j++) {
        if (arr[min] > arr[j]) {
          min = j;
          setCurrentNextIndex(min);
        }
      }
      if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
        await sleep(5000 / arr.length);
      }
      setArr([...arr]);
      await sleep(5000 / arr.length);
    }
    setCurrentIndex(null);
    setCurrentNextIndex(null);
    console.log("S Original array after Sorting ->", arr);
    setBtnState(0);
  };

  const insertionOnClick = async () => {
    setBtnState(1);
    console.log("I Original array before Sorting ->", arr);
    let len = arr.length;
    for (let i = 1; i < len; i++) {
      let key = arr[i];
      let j = i - 1;
      setCurrentIndex(i);
      while (j >= 0 && arr[j] > key) {
        setCurrentNextIndex(j);
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
      await sleep(6000 / arr.length);
    }
    setCurrentIndex(null);
    setCurrentNextIndex(null);
    console.log("I Original array after Sorting ->", arr);
    setBtnState(0);
  };

  const mergeOnClick = () => {
    console.log("M Original array before Sorting ->", arr);
    const sortedArr = mergeSort(arr);
    console.log("sortedarr", sortedArr);
    // const returnedArr = [...sortedArr];
    setArr(sortedArr); // to pass the exact same state of returned array to setArr
    console.log("M Sorted Array ->", sortedArr);
    console.log("M Original array after Sorting ->", arr);
  };

  // function click() {
  //   console.log("Great Shot!");
  // }

  return (
    <div>
      <div className="heading">
        <div className="webName">
          <h2> Sorting Visualizer </h2>
          <h5> by Shubham </h5>
        </div>

        <div className="separator"></div>

        <div className="randomList">
          <button onClick={generateRandomList} disabled={btnState === 1}>
            {" "}
            Generate New Array{" "}
          </button>
        </div>

        <div className="separator"></div>

        <div className="range-wrapper">
          <p> Select Array Range </p>
          <Slider
            disabled={btnState === 1}
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
          <button onClick={bubbleOnClick} disabled={btnState === 1}>
            {" "}
            Bubble Sort{" "}
          </button>
          <button onClick={selectionOnClick} disabled={btnState === 1}>
            {" "}
            Selection Sort{" "}
          </button>
          <button onClick={insertionOnClick} disabled={btnState === 1}>
            {" "}
            Insertion Sort{" "}
          </button>
          <button onClick={mergeOnClick} disabled={btnState === 1}>
            {" "}
            Merge Sort{" "}
          </button>
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
