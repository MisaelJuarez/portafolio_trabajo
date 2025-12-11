import { FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";
import "../styles/Contactame.css";

const Contactame = () => {
  return (
    <footer className="footer-container d-flex justify-content-center" id="contactame">
      <div className="footer-content">

        <h3 className="footer-title">Contacto</h3>

        <div className="footer-item">
          <FaPhone className="footer-icon" />
          <span>+52 5574584821</span>
        </div>

        <div className="footer-item">
          <FaEnvelope className="footer-icon" />
          <span>misael2745@gmail.com</span>
        </div>

        <div className="footer-item">
          <FaGithub className="footer-icon" />
          <a 
            href="https://github.com/MisaelJuarez" 
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/MisaelJuarez
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Contactame;
