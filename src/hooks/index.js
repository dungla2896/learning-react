import React, { useState } from 'react';
import ButtonComponent from './component/button';
import Result from './component/result';

const CounterHooks = () => {
  // tao ra state va cach thuc cap nhat lai state
  const [count, setCount] = useState(10);

  const incrementCounter = () => {
    setCount(count + 1);
  }

  const decrementCounter = () => {
    setCount(count - 1);
  }

  return(
    <>
      <Result result={count} />
      <ButtonComponent
        click={incrementCounter}
        type="button">+</ButtonComponent>
      <ButtonComponent
        click={decrementCounter}
        type="button">-</ButtonComponent>
    </>
  );
}
export default CounterHooks;