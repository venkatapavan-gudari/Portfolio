
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
