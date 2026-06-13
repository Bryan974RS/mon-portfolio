function Formation() {
  const formations = [
    {
      titre: "Ynov Montpellier — Bachelor Développement Web & Applications",
      date: "Rentrée prévue : septembre/octobre 2026",
    },
    {
      titre: "Bac+4 Développement & Conception d'Applications Web",
      date: "Expert Net, La Possession — 2025-2026",
    },
    {
      titre: "BTS Systèmes Numériques — option Informatique & Réseaux",
      date: "Lycée de Trois Bassins — 2024",
    },
    {
      titre: "Bac Professionnel Systèmes Numériques",
      date: "Mention Bien — Lycée de Trois Bassins — 2022",
    },
  ];

  return (
    <section id="formation">
      <h2>Formation</h2>
      {formations.map((f, index) => (
        <div key={index} className="formation-item">
          <h5>{f.titre}</h5>
          <p className="date">{f.date}</p>
        </div>
      ))}
    </section>
  );
}

export default Formation;