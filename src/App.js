import logo from './logo.svg';
import './App.css';
import FruitContainer from './components/FruitContainer';

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'mango', 'orange', 'kiwi', 'starfruit', 'crabapple', 'grape', 'grapefruit', 'mango', 'mangosteen']
  return (
    <div className="App">
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;
