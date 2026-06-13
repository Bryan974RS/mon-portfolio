function Competences() {
  const competences = {
    Développement: ["HTML", "CSS", "JavaScript", "PHP", "React", "Node.js"],
    "Base de données": ["MySQL", "SQL"],
    "Réseaux & Systèmes": ["Windows", "Linux", "Active Directory", "VLAN", "DHCP", "TCP/IP"],
    Outils: ["Git", "GitHub", "VS Code", "XAMPP", "VirtualBox", "VMware"],
    Téléphonie: ["VoIP", "Asterisk", "FreePBX"],
  };

  return (
    <section id="competences">
      <h2>Compétences</h2>
      {Object.entries(competences).map(([categorie, skills]) => (
        <div key={categorie} className="competence-groupe">
          <h5>{categorie}</h5>
          <div className="badges">
            {skills.map((skill) => (
              <span key={skill} className="badge">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Competences;