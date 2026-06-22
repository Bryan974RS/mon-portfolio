function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <p className="hero-greeting">Hello, my name is</p>
        <h1>Bryan Sadeyen</h1>
        <p className="hero-desc">
          Développeur Web Junior, passionné par la création d'interfaces
          modernes et performantes.
        </p>
        <a href="#contact" className="btn-primary">
          Me contacter
        </a>
      </div>
      <div className="hero-image">
        <img src={process.env.PUBLIC_URL + "/photo.jpg"} alt="Bryan Sadeyen" />
      </div>
    </section>
  );
}

export default Hero;
