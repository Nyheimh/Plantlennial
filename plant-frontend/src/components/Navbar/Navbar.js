import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import "./Navbar.css";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Plantllenial
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/plants"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Plants
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/monsteras" className="nav-links" onClick={closeMobileMenu}>
                Monsteras
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/pothos" className="nav-links" onClick={closeMobileMenu}>
                Pothos
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/snakeplant" className="nav-links" onClick={closeMobileMenu}>
                Snake Plants
              </Link>
            </li> */}


          
            {/* <li>
              <Link
                to="/contactus"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/review"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Review
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}
