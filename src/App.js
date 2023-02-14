import './App.css';
import Clicker from './Clicker';
import RollDice from './RollDice';
import Lottery from './Lottery';
import CoinFlipper from './CoinFlipper'

function App() {
  return (
    <div className="App">
     <Clicker/>
      <RollDice />
      <Lottery title='Lotto' maxValue={40} Length={6}/>
      <Lottery title='Mini Daily' maxValue={10} Length={4}/>
      <CoinFlipper/>
      
    </div>
  );
}

export default App;
