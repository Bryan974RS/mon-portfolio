import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Projets() {
  const [searchParams] = useSearchParams();
  const filtreInitial = searchParams.get("filtre") || "Tous";
  const [filtre, setFiltre] = useState(filtreInitial);

  const projets = [
    {
      titre: "PROG — App fitness",
      description:
        "Application de suivi d'entraînement. Séances, progression, objectifs et street workout.",
      competences: ["React", "JavaScript"],
      lien: "https://github.com/Bryan974RS/prog-project",
    },
    {
      titre: "Gaia",
      description:
        "Projet de BTS — Récupération de données JSON depuis des capteurs, traitement en JavaScript, stockage MySQL et affichage dynamique via PHP & Bootstrap.",
      competences: ["JavaScript", "MySQL"],
      lien: null,
    },
    {
      titre: "To-Do List",
      description: "Gestion de tâches en JavaScript.",
      competences: ["JavaScript"],
      lien: "https://bryan974rs.github.io/todo-list/",
    },
    {
      titre: "Calculatrice",
      description: "Calculatrice interactive.",
      competences: ["JavaScript"],
      lien: "https://bryan974rs.github.io/calculatrice-js/",
    },
    {
      titre: "Portfolio v1",
      description: "Site personnel en HTML/CSS/Bootstrap.",
      competences: ["CSS"],
      lien: "#",
    },
  ];

  const competencesDisponibles = [
    "Tous",
    "React",
    "JavaScript",
    "CSS",
    "MySQL",
    "Réseaux",
  ];

  const projetsFiltres =
    filtre === "Tous"
      ? projets
      : projets.filter((p) => p.competences.includes(filtre));

  return (
    <section className="projets-page">
      <h2>Mes projets</h2>

      <div className="filtres">
        {competencesDisponibles.map((comp) => (
          <button
            key={comp}
            className={`filtre-btn ${filtre === comp ? "actif" : ""}`}
            onClick={() => setFiltre(comp)}
          >
            {comp}
          </button>
        ))}
      </div>

      <div className="projets-grid">
        {projetsFiltres.map((projet) => (
          <div key={projet.titre} className="card">
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className="competences-badges">
              {projet.competences.map((c) => (
                <span key={c} className="badge">
                  {c}
                </span>
              ))}
            </div>
            {projet.lien ? (
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir le projet
              </a>
            ) : (
              <span className="btn-soon">Soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projets;
