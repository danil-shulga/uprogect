import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className={classes.text}>{counter}</h1>
      <button
        className={classes.btn}
        onClick={() => setCounter((cur) => ++cur)}>
        click
      </button>
    </div>
  );
};
