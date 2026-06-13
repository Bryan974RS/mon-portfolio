import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import APropos from './components/APropos';
import Formation from './components/Formation';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <APropos />
        <Formation />
        <Competences />
        <Projets />
        <Contact />
      </main>
    </div>
  );
}

export default App;