import './App.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Credit from './components/pages/Credit';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Feature from './components/pages/Feature';

function App() {
  return (
    <>
      <header>
      <Navbar />
      </header>
      <main>
      <Home />
      <Feature /> 
      <Skills />
      <Portfolio />
      <Contact />
      </main>
      <footer>
        <Credit />
      </footer>
      
    </>
  );
}

export default App;
