import Calculator from './components/Calculator';
import CalculatorProvider from './context/CalculatorContext';

function App() {
  return (
    <div className='App' style={{ display: 'flex', justifyContent: 'center' }}>
      <CalculatorProvider productPrice={50.84}>
        <Calculator />
      </CalculatorProvider>
    </div>
  );
}

export default App;
