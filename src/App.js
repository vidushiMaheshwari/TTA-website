
import Home from './screens/Home/Home';
import './App.css';
import About from './screens/About/About';
import Challenges from './screens/Challenges/Challenges';
import NavBar from './screens/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Challenges />
    </div>
  );
}

export default App;
