import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleOperation = (operation) => {
    if (input !== '') {
      const number = parseFloat(input);
      switch (operation) {
        case 'addition':
          setTotal(total + number);
          break;
        case 'subtraction':
          setTotal(total - number);
          break;
        case 'multiplication':
          setTotal(total * number);
          break;
        case 'division':
          setTotal(total / number);
          break;
        default:
          break;
      }
      setInput('');
    }
  };

  const handleReset = () => {
    setTotal(0);
    setInput('');
  };

  return (
    <div>
      <Display total={total} />
      <input type="number" value={input} onChange={handleInputChange} />
      <Button operation="addition" onClick={() => handleOperation('addition')}>
        Addition
      </Button>
      <Button operation="subtraction" onClick={() => handleOperation('subtraction')}>
        Subtraction
      </Button>
      <Button operation="multiplication" onClick={() => handleOperation('multiplication')}>
        Multiplication
      </Button>
      <Button operation="division" onClick={() => handleOperation('division')}>
        Division
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default Calculator;
