import { useState } from 'react';
import Keypads from './Keypads';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleOnClick = (e) => {
    const targetText = e.target.textContent;
    const newState = calculate(state, targetText);
    setState(newState);
  };
  return (
    <div>

      <Keypads handleOnClick={handleOnClick} state={state} />
    </div>
  );
};
export default Calculator;
