export interface CalculatorContextProps {
    productPrice: number;
    inputValue: number;
    resetValue: number;
    handleButtonClick: (number: number) => void;
    addTwoZerosAtTheEnd: () => void;
    deleteLastValue: () => void;
}

export interface CalculatorProviderProps {
    productPrice: number;
    children: React.ReactNode;
}