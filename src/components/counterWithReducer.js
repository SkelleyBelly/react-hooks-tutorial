import React, { useReducer } from "react";
import { Button } from "@material-ui/core";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2 className="title">Counter with complex state (useReducer)</h2>
      <div className="counter">{state.count}</div>
      <div>
        <Button
          className="counterButton"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </Button>
        <Button
          className="counterButton"
          onClick={() => dispatch({ type: "increment", value: 10 })}
        >
          +
        </Button>
      </div>
    </>
  );
};

export default Counter;
