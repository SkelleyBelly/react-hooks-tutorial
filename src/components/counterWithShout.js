import React, { useState, useCallback, useRef, useMemo } from "react";
import { Button } from "@material-ui/core";

const Counter = () => {
  const [count, setCount] = useState(0);

  // ANONYMOUS FUNCTION EXAMPLE
  const shoutNumber = () => alert(count);

  const shoutRef = useRef(shoutNumber);
  console.log(shoutRef.current === shoutNumber);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2 className="title">Counter with Callbacks (useCallback / useMemo)</h2>
      <div className="counter">{count}</div>
      <Button className="counterButton" onClick={increaseCount}>
        +
      </Button>
      <Button className="counterButton green" onClick={shoutNumber}>
        Shout!
      </Button>
    </>
  );
};

export default Counter;

// ARRAY EXAMPLE
// const arrayExample = [1, 2, 3, 4, 5];

// const arrayRef = useRef(arrayExample);
// console.log(arrayExample === arrayRef.current);

// USEMEMO EXAMPLE
// const arrayExample = useMemo(() => [1, 2, 3, 4, 5], []);

// const arrayRef = useRef(arrayExample);
// console.log(arrayExample === arrayRef.current);

// ANONYMOUS FUNCTION EXAMPLE
// const shoutNumber = () => alert("Hello");

// const shoutRef = useRef(shoutNumber);
// console.log(shoutRef.current === shoutNumber);

// USECALLBACK EXAMPLE
// const shoutNumber = useCallback(() => alert("Hello"), []);

// const shoutRef = useRef(shoutNumber);
// console.log(shoutRef.current === shoutNumber);
