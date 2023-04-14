import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const ReCalculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const reValueButton = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const inputValue = calculatorData.next || calculatorData.total || '0';
  return (
    <>
      <center>
        <div className="cal-container">
          <input type="number" value={inputValue} id="recalculator-input" readOnly />
          <button type="button" onClick={() => reValueButton('AC')}>AC</button>
          <button type="button" onClick={() => reValueButton('+/-')}>+/-</button>
          <button type="button" onClick={() => reValueButton('%')}>%</button>
          <button type="button" className="divide orange" onClick={() => reValueButton('÷')}>÷</button>
          <button type="button" onClick={() => reValueButton('7')}>7</button>
          <button type="button" onClick={() => reValueButton('8')}>8</button>
          <button type="button" onClick={() => reValueButton('9')}>9</button>
          <button type="button" className="multply orange" onClick={() => reValueButton('x')}>x</button>
          <button type="button" onClick={() => reValueButton('4')}>4</button>
          <button type="button" onClick={() => reValueButton('5')}>5</button>
          <button type="button" onClick={() => reValueButton('6')}>6</button>
          <button type="button" className="sub orange" onClick={() => reValueButton('-')}>-</button>
          <button type="button" onClick={() => reValueButton('1')}>1</button>
          <button type="button" onClick={() => reValueButton('2')}>2</button>
          <button type="button" onClick={() => reValueButton('3')}>3</button>
          <button type="button" className="plus orange" onClick={() => reValueButton('+')}>+</button>
          <button type="button" className="Zero" onClick={() => reValueButton('0')}>0</button>
          <button type="button" onClick={() => reValueButton('.')}>.</button>
          <button type="button" className="isqual orange" onClick={() => reValueButton('=')}>=</button>
        </div>
      </center>
    </>
  );
};

export default ReCalculator;
