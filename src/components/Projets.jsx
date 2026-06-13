function Projets() {
  const projets = [
    {
      titre: "PROG — App de fitness",
      description:
        "Application mobile & web de suivi d'entraînement. Séances programmées, progression, street workout, étirements et objectifs personnalisés.",
      lien: "#",
      label: "En cours de développement",
      highlight: true,
    },
    {
      titre: "To-Do List",
      description:
        "Application web permettant de gérer des tâches avec JavaScript et manipulation du DOM.",
      lien: "https://bryan974rs.github.io/todo-list/",
      label: "Voir le projet",
    },
    {
      titre: "Calculatrice JavaScript",
      description:
        "Application de calculatrice développée en JavaScript pour travailler la logique et les interactions utilisateur.",
      lien: "https://bryan974rs.github.io/calculatrice-js/",
      label: "Voir le projet",
    },
    {
      titre: "Portfolio v1",
      description: "Site web personnel développé en HTML, CSS et Bootstrap.",
      lien: "https://github.com/Bryan974rs",
      label: "Voir GitHub",
    },
  ];

  return (
    <section id="projets">
      <h2>Mes projets</h2>
      <div className="projets-grid">
        {projets.map((projet) => (
          <div key={projet.titre} className={`card ${projet.highlight ? "card-highlight" : ""}`}>
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <a href={projet.lien} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {projet.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projets;