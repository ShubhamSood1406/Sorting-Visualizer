import React from "react";
import "./Header.css";

function Header() {
  function click() {
    console.log("Great Shot!");
  }
  return (
    <div className="heading">
      <button onClick={click}> Genera </button>
      <button onClick={click}> Select Array Range </button>
      <button onClick={click}> Bubble Sort </button>
      <button onClick={click}> Insertion Sort </button>
      <button onClick={click}> MergeSort </button>
      <button onClick={click}> Quick Sort </button>
    </div>
  );
}

export default Header;
