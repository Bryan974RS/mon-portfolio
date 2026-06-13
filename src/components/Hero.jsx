function Hero() {
  return (
    <section id="hero">
      <h1>Salut, moi c'est Bryan 👋</h1>
      <img
        src={process.env.PUBLIC_URL + "/photo.jpg"}
        alt="Bryan Sadeyen"
        className="hero-photo"
      />
      <p className="hero-titre">Développeur Full Stack Junior</p>
      <p className="hero-sous-titre">
        Recherche d'alternance en développement web & applicatif
      </p>
      <div className="hero-boutons">
        <a href="#contact" className="btn-primary">
          Me contacter
        </a>
        <a
          href="https://github.com/Bryan974rs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Mon GitHub
        </a>
      </div>
    </section>
  );
}

export default Hero;
