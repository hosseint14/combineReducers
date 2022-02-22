import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const [showCounter, setShowCounter] = useState(true);
  const [disableButton, setdisableButton] = useState(false);

  const incerementHandler = () => {
    dispatch({ type: "incerement", amount: 1 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement", amount: 1 });
  };

  const resetHandler = () => {
    dispatch({ type: "reset" });
  };

  const showCounterHandler = () => {
    setShowCounter(!showCounter);
    setdisableButton(!disableButton);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button disabled={disableButton} onClick={decrementHandler}>
        Decrement
      </button>
      <button
        disabled={disableButton}
        className={classes.reset}
        onClick={resetHandler}
      >
        Reset
      </button>
      <button disabled={disableButton} onClick={incerementHandler}>
        Incerement
      </button>
      <br></br>
      <button onClick={showCounterHandler}>showCounter</button>
    </main>
  );
};

export default Counter;
