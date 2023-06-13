import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Mission from './Components/Mission/Mission';
import Perks from './Components/Perks/Perks';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Mission />
      <Perks/>
    </div>
  );
}

export default App;
