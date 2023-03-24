
import Home from './screens/Home/Home';
import './App.css';
import About from './screens/About/About';
import Challenges from './screens/Challenges/Challenges';
import Get_Involved from './screens/Get_Involved/Get_Involved';
import NavBar from './screens/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Challenges />
      <Get_Involved />
    </>
  );
}

export default App;
