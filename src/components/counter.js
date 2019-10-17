import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => console.log("I only show on the first render"), []);

  useEffect(() => console.log("I show on every render"));

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2 className="title">Basic Counter (useState / useEffect)</h2>
      <div className="counter">{count}</div>
      <div>
        <Button className="counterButton" onClick={increaseCount}>
          +
        </Button>
      </div>
    </>
  );
};

export default Counter;

// ====== USE EFFECT ==========

// useEffect(() => console.log(count), [count]);
