import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [menuOuvert, setMenuOuvert] = useState(false);

  const fermerMenu = () => setMenuOuvert(false);

  const allerVersSection = (id) => {
    navigate("/");
    fermerMenu();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const allerHome = () => {
    navigate("/");
    fermerMenu();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={fermerMenu}>
        BS
      </Link>

      <button className="burger" onClick={() => setMenuOuvert(!menuOuvert)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOuvert ? "ouvert" : ""}`}>
        <li>
          <button onClick={allerHome} className="nav-btn">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => allerVersSection("about")} className="nav-btn">
            About
          </button>
        </li>
        <li>
          <Link to="/projets" onClick={fermerMenu}>
            Projets
          </Link>
        </li>
        <li>
          <button
            onClick={() => allerVersSection("contact")}
            className="nav-btn"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
