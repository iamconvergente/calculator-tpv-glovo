import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import { CalculatorContextProps } from '../interfaces';

type Props = {};

const ButtonsContainer = (props: Props) => {
  const { handleButtonClick, addTwoZerosAtTheEnd, deleteLastValue } = useContext(
    CalculatorContext
  ) as CalculatorContextProps;
  return (
    <div className='buttons-container'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
        <button key={number} className='button-calculator' onClick={() => handleButtonClick(number)}>
          {number}
        </button>
      ))}
      <button className='button-calculator' onClick={addTwoZerosAtTheEnd}>
        00
      </button>
      <button className='button-calculator' onClick={() => handleButtonClick(0)}>
        0
      </button>
      <button className='button-calculator' onClick={deleteLastValue}>
        B
      </button>
    </div>
  );
};

export default ButtonsContainer;
