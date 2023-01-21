import classes from './Counter.module.css';
import {increment, decrement, toggleCounter, reset} from '../store/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{state.showCounter && state.counter}</div>
      <div className={classes.actions}>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(increment(5))}>Increment by 5</button>
        <button onClick={() => dispatch(reset())}>Reset Count</button>
        <button onClick={() => dispatch(decrement(5))}>Decrement by 5</button>  
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>  
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
