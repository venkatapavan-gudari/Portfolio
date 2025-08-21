
import './App.css';
import About from './pages/About';
import Certificates from './pages/Certificates';
import CodingPlatforms from './pages/CodingPlatforms';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Resume from './pages/Resume';



function App() {
  return (
    <div className="App">
      <Home></Home>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Certificates></Certificates>
      <Resume></Resume>
      <CodingPlatforms></CodingPlatforms>
      <Contact></Contact>
     
      
    </div>
  );
}

export default App;
