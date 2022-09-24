import React, { useState } from "react";
import classes from "./Counter.module.css";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  function decrease() {
    if (counter === 0) {
    } else {
      props.teamsCounter(counter - 1);
      setCounter(counter - 1);
    }
  }

  function increase() {
    if (counter === props.max) {
    } else {
      props.teamsCounter(counter + 1);
      setCounter(counter + 1);
    }
  }

  return (
    <div className={classes.counterBlock}>
      <p className={classes.counterBlock__headline}>{props.headline}</p>
      <button className={classes.counterBlock__button} onClick={decrease}>
        -
      </button>
      <p className={classes.counterBlock__bar}>{counter}</p>
      <button className={classes.counterBlock__button} onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Counter;
