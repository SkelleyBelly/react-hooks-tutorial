import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const dataRequest = () => {
  return new Promise(resolve =>
    setTimeout(() => resolve("Here is some data!!"), 2000)
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await dataRequest();
      setData(data);
    };
    getData();
  }, []);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2 className="title">Counter with Data Retrieval (useEffect)</h2>
      <div className="counter">{count}</div>
      <div>
        <Button className="counterButton" onClick={increaseCount}>
          +
        </Button>
      </div>
      <h5 className="data">{data}</h5>
    </>
  );
};

export default Counter;
