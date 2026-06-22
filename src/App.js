import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./pages/Accueil/Accueil";
import Projets from "./pages/Projets/Projets";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </div>
  );
}

export default App;
