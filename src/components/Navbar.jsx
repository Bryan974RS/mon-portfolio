function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <span className="nav-logo">Bryan Sadeyen</span>
        <ul className="nav-links">
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#formation">Formation</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;