import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/homepage.module.css';
import About from "./About";
import Services from "./rollingservice";
import Footer from "./footer";
import Navbar from "./navbar"; 

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Ny state för dark mode

  const toggleNavbar = () => setIsOpen(!isOpen);

  // Funktion för att scrolla till toppen
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Funktion för att toggla dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('darkmode', !darkMode);
    console.log(document.body.classList);  // Debugga genom att logga klasserna // Lägg till eller ta bort dark-mode class på body
  };

  return (
    <div id="Hem">
      <div>
        <div className={styles.mycustomclass} style={{
          backgroundColor: darkMode ? '#5f5f5f' : 'transparent',
          zIndex: 0, /* Gör så att bakgrunden ligger bakom */
        }}>
          <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          

          <div className={styles.containervideo}>
            <div className={styles.containervideodiv}>
              <div className={styles.overlayText}>
                <h2 className={styles.headerin}>Skapa din perfekta stil – vi har erfarenheten och passionen!</h2>
                <p className="p-1 max-w-[700px] mx-auto">
                  Vi strävar efter att skapa en varm och inbjudande atmosfär där du kan slappna av och känna dig som hemma.
                </p>
              </div>

              <div className={styles.nyaheader}>
                <h2 className="text-center">Boka din tid</h2>
                <div className={styles.buttonsContainer}>
                  <button className={styles.button}>Boka tid</button>
                  <button className={styles.button}>Kontakta Oss</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fixaoverlap} style={{
          position: 'absolute',
          top: '72%',
          width: '100%',
          height: '5vh',
          background: darkMode 
            ? 'linear-gradient(to top, #5f5f5f 50%, transparent 100%)' 
            : 'linear-gradient(to bottom, transparent 50%, white 100%)', // Välj bakgrund beroende på darkMode
        }}></div>
      </div>

      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <button 
        className={styles.scrollTopButton} 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        &#8593; 
      </button>

      <div className={styles.darkmodefix}>
        <span className={`text-white mr-2 ${darkMode ? "hidden" : "block"}`}>Mörk</span>
        <span className={`text-white mr-2 ${darkMode ? "block" : "hidden"}`}>Ljus</span>
        <button 
          className={`${styles.toggleButton} rounded-full bg-gray-400 p-2 transition-all duration-300`}
          onClick={toggleDarkMode}
        >
          <div 
            className={`${darkMode ? styles.toggleActive : styles.toggleInactive} w-6 h-6 bg-white rounded-full transition-all`}
          ></div>
        </button>
      </div>
    </div>
    );
};

export default Gallery;
