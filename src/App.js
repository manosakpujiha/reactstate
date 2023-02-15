import './App.css';
import Clicker from './Clicker';
import RollDice from './RollDice';
import Lottery from './Lottery';
import CoinFlipper from './CoinFlipper';
import Button from './Button';
import './Button.css';
import ColorBoxes from './ColorBoxes';

function App() {
  return (
    <div className="App">
     <Clicker/>
      <RollDice />
      <Lottery title='Lotto' maxValue={40} Length={6}/>
      <Lottery title='Mini Daily' maxValue={10} Length={4}/>
      <CoinFlipper/>
      <Button title='prop title' color='brown' bgColor='pink'/>
      <ColorBoxes/>
    </div>
  );
}

export default App;
