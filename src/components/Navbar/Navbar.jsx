import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const allerVersSection = (id) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const allerHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        BS
      </Link>
      <ul className="nav-links">
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
          <Link to="/projets">Projets</Link>
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
