import "../../App.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import ContactBanner from "../../components/ContactBanner/ContactBanner";

function Accueil() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ContactBanner />
    </>
  );
}

export default Accueil;
