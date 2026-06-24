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
      statut: null,
    },
    {
      titre: "Gaia",
      description:
        "Projet de BTS — Récupération de données JSON depuis des capteurs, traitement en JavaScript, stockage MySQL et affichage dynamique via PHP & Bootstrap.",
      competences: ["JavaScript", "MySQL"],
      lien: null,
      statut: "soon",
    },
    {
      titre: "Réseau Mairie de Saint-Leu",
      description:
        "Installation et configuration du réseau Cisco pour les nouveaux locaux de la mairie après rénovation.",
      competences: ["Réseaux"],
      lien: null,
      statut: "stage",
    },
    {
      titre: "Salle informatique — École de la Chaloupe",
      description:
        "Installation d'une salle de classe informatique après rénovation de l'école.",
      competences: ["Réseaux"],
      lien: null,
      statut: "stage",
    },
    {
      titre: "Déploiement réseau — Collège Pointe des Châteaux",
      description:
        "Installation des systèmes via le réseau et clonage de machine à distance pour une salle du collège.",
      competences: ["Réseaux"],
      lien: null,
      statut: "stage",
    },
    {
      titre: "Vidéosurveillance — Musée de Stella",
      description:
        "Installation et configuration réseau de caméras de vidéosurveillance.",
      competences: ["Réseaux"],
      lien: null,
      statut: "stage",
    },
    {
      titre: "To-Do List",
      description: "Gestion de tâches en JavaScript.",
      competences: ["JavaScript"],
      lien: "https://bryan974rs.github.io/todo-list/",
      statut: null,
    },
    {
      titre: "Calculatrice",
      description: "Calculatrice interactive.",
      competences: ["JavaScript"],
      lien: "https://bryan974rs.github.io/calculatrice-js/",
      statut: null,
    },
    {
      titre: "Portfolio v1",
      description: "Site personnel en HTML/CSS/Bootstrap.",
      competences: ["CSS"],
      lien: "#",
      statut: null,
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
        {projetsFiltres.map((projet) => {
          let bouton;
          if (projet.lien) {
            bouton = (
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir le projet
              </a>
            );
          } else if (projet.statut === "stage") {
            bouton = <span className="btn-stage">Stage</span>;
          } else {
            bouton = <span className="btn-soon">Soon</span>;
          }

          return (
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
              {bouton}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projets;
