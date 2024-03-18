import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Plantlennial
              <i className="fas fa-seedling" />
            </Link>
          </div>
          <small className="website-rights">Plantlennial © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link twitter"
              to="https://www.linkedin.com/in/nyheimhunter/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
