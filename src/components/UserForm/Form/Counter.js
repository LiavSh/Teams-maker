import React, { useState } from "react";
import classes from "./Counter.module.css";
import ErrModal from "../../UI/UI components/ErrModal.js"

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const [err, setErr] = useState();

  function decrease() {
    if (counter === 0) {
      setErr({
        header: "Notice!",
        content: "The minimum number of teams is " + props.max,
      });
    } else {
      props.teamsCounter(counter - 1);
      setCounter(counter - 1);
    }
  }

  function increase() {
    if (counter === props.max) {
      setErr({
        header: "Notice!",
        content: "The maximum number of teams is " + props.max,
      });
    } else {
      props.teamsCounter(counter + 1);
      setCounter(counter + 1);
    }
  }

  return (
    <div>
      {" "}
      {err && (
        <ErrModal
          header={err.header}
          content={err.content}
          onConfirm={function () {
            setErr();
          }}
        />
      )}
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
    </div>
  );
}

export default Counter;
