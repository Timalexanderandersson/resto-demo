import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/navbar.module.css';

const Navbar = ({ isOpen, toggleNavbar, darkMode, toggleDarkMode }) => {
  return (
    <div className={styles.container}>
      <div className="flex justify-between items-center p-4 w-full">
        <h1 className={styles.navLinkheader}>BrandName</h1>

        {/* Navbar Links and Dark Mode Button */}
        <div className="flex items-center space-x-6 w-[40vh] justify-between">
          <div className="hidden md:flex space-x-9">
            <Link to="/Hem" className={styles.navLink}>Hem</Link>
            <Link to="/galleri" className={styles.navLink}>Galleri</Link>
            <a href="#oss" className={styles.navLink}>Om oss</a>
            <a href="#contact" className={styles.navLink}>Kontakt</a>
          </div>
          <div className="flex items-center space-x-3">    
          </div>
        </div>
        <button 
          className="md:hidden text-black" 
          onClick={toggleNavbar} 
          aria-label="Toggle navigation"
        >
          <i className={`${styles.burgerIcon} fas fa-bars`}></i>
        </button>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} ${styles.customMenu}`}>
        <div className={styles.innermeny}>
          <div className={styles.innermenytwo}>
            <Link to="/Hem" className={styles.navLinkbig}>Hem</Link>
            <Link to="/galleri" className={styles.navLinkbig}>Galleri</Link>
            <a href="#oss" className={styles.navLinkbig}>Om oss</a>
            <a href="#contact" className={styles.navLinkbig}>Kontakt</a>

            <div className={styles.darkmodefixtwo}>
              <span className={`text-dark mr-2 ${darkMode ? "hidden" : "block"}`}>Mörk</span>
              <span className={`text-black mr-2 ${darkMode ? "block" : "hidden"}`}>Ljus</span>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
