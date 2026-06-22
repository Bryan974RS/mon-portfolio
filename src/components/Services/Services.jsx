import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      titre: "Développement Front-End",
      description:
        "Création d'interfaces modernes et responsives avec React et JavaScript.",
      icone: "💻",
      filtre: "React",
    },
    {
      titre: "Code Propre",
      description:
        "Un code structuré, lisible et maintenable, respectant les bonnes pratiques.",
      icone: "🧩",
      filtre: "JavaScript",
    },
    {
      titre: "Interface Utilisateur",
      description:
        "Des designs intuitifs pensés pour une expérience utilisateur fluide.",
      icone: "🎨",
      filtre: "CSS",
    },
    {
      titre: "Bases de Données",
      description:
        "Gestion et structuration de données avec MySQL et Supabase.",
      icone: "🗄️",
      filtre: "MySQL",
    },
    {
      titre: "Réseaux & Systèmes",
      description:
        "Connaissances en administration réseau, Linux, Windows et virtualisation.",
      icone: "🌐",
      filtre: "Réseaux",
    },
    {
      titre: "Apprentissage Continu",
      description:
        "Toujours à jour sur les nouvelles technologies et frameworks.",
      icone: "🚀",
      filtre: "Tous",
    },
  ];

  return (
    <section id="services" className="services">
      <p className="section-tag">Mes compétences</p>
      <h2>Ce que je sais faire</h2>
      <div className="services-grid">
        {services.map((service) => (
          <Link
            to={`/projets?filtre=${service.filtre}`}
            key={service.titre}
            className="service-card"
          >
            <div className="service-icon">{service.icone}</div>
            <h3>{service.titre}</h3>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
