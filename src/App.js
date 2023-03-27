
import Home from './screens/Home/Home';
import './App.css';
import About from './screens/About/About';
import Challenges from './screens/Challenges/Challenges';
import NavBar from './screens/NavBar/NavBar';
import Schedule from './screens/Schedule/Schedule';
import Sponsors from './screens/Sponsors/Sponsors';
import FAQs from './screens/FAQs/FAQs';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <About  />
        <Challenges  />
        <FAQs />
        <Schedule  />
        <Sponsors  />
    </div>
  );
}

export default App;
