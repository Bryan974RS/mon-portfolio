function About() {
  const competences = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <section id="about" className="about">
      <div className="about-image">
        <img src={process.env.PUBLIC_URL + "/photo.jpg"} alt="Bryan Sadeyen" />
      </div>
      <div className="about-content">
        <p className="section-tag">À propos</p>
        <h2>Qui suis-je</h2>
        <p>
          Je suis Bryan, développeur web junior passionné par les technologies
          informatiques. Je développe régulièrement des projets personnels pour
          renforcer mes compétences en front-end, back-end et bases de données.
        </p>
        <p>
          Sérieux, adaptable et impliqué, je recherche une alternance au rythme
          d'une semaine en formation et deux semaines en entreprise.
        </p>
        <div className="competences-badges">
          {competences.map((comp) => (
            <span key={comp} className="badge">
              {comp}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
