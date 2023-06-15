import './App.css';
import Faq from './Components/FAQs/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Learnings from './Components/Learnings/Learnings';
import Mission from './Components/Mission/Mission';
import Perks from './Components/Perks/Perks';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Mission />
      <Perks />
      <Learnings />
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
