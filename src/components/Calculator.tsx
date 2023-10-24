import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import CalculatorInputsContainer from './CalculatorInputsContainer';
import { CalculatorContextProps } from '../interfaces';
import ButtonsContainer from './ButtonsContainer';
const Calculator = () => {
  const { productPrice } = useContext(CalculatorContext) as CalculatorContextProps;

  return (
    <div className='calculator'>
      <h2>Pago en efectivo: {productPrice}€</h2>
      <CalculatorInputsContainer />
      <ButtonsContainer />
    </div>
  );
};

export default Calculator;
