import { createContext, useMemo, useState } from 'react';
import { CalculatorContextProps, CalculatorProviderProps } from '../interfaces';

export const CalculatorContext = createContext<CalculatorContextProps | null>(null);

const CalculatorProvider: React.FC<CalculatorProviderProps> = ({ productPrice, children }) => {
  const [inputValue, setInputValue] = useState<number>(0.0);
  const resetValue: number = useMemo(() => {
    if (inputValue === 0.0) return 0;
    if (inputValue < productPrice) return 0;
    if (inputValue > productPrice) return parseFloat((inputValue - productPrice).toFixed(2));
    return 0;
  }, [inputValue, productPrice]);

  const handleButtonClick = (number: number) => {
    const decimalValue = number / 100;
    const newInputValue = parseFloat(inputValue.toString()) * 10 + decimalValue;
    setInputValue(parseFloat(newInputValue.toFixed(2)));
  };

  const addTwoZerosAtTheEnd = () => {
    setInputValue((prevState) => parseFloat((prevState * 100).toFixed(2)));
  };

  const deleteLastValue = () => {
    if (inputValue.toString().length === 1) return setInputValue(0);
    const newInputValue = inputValue.toString().slice(0, -1);
    setInputValue(parseFloat(newInputValue));
  };

  const value: CalculatorContextProps = {
    productPrice,
    inputValue,
    resetValue,
    handleButtonClick,
    addTwoZerosAtTheEnd,
    deleteLastValue,
  };

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
};

export default CalculatorProvider;
