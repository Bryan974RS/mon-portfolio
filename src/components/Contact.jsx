function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="card">
        <p><strong>Email :</strong> persobryans2@gmail.com</p>
        <p><strong>Ville :</strong> Montpellier</p>
        <p><strong>Permis :</strong> Permis B, véhiculé</p>
        <div className="contact-liens">
          <a href="https://github.com/Bryan974rs" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Mon GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Mon LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;