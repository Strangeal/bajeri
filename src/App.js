import './App.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blog from './components/pages/Blog';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Feature from './components/pages/Feature';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Feature /> 
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
