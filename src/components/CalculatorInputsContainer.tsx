import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import { CalculatorContextProps } from '../interfaces';

const CalculatorInputsContainer = () => {
  const { inputValue, resetValue } = useContext(CalculatorContext) as CalculatorContextProps;

  return (
    <div className='inputs-container'>
      <div className='input-container'>
        <label>Pago en efectivo: </label>
        <input type='text' value={inputValue} readOnly />
      </div>
      <div className='input-container'>
        <label>Cambio debido: </label>
        <input type='text' value={resetValue} readOnly disabled={resetValue === 0} />
      </div>
    </div>
  );
};

export default CalculatorInputsContainer;
