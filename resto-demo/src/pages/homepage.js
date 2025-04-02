import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import videoFile from '../assets/newvideo.mp4';
import styles from '../styles/homepage.module.css';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex flex-col h-screen ">
      <div className="w-full flex justify-center h-[85vh] relative">
        <video
          className={styles.video}
          autoPlay
          muted
          loop
        >
          <source src={videoFile} type="video/mp4" />
          Din webbläsare stödjer inte video-taggen.
        </video>

        <div className={styles.container}>
          <div className="flex justify-between items-center p-4">
            <h1 className={styles.navLinkheader}>BrandName</h1>
            {/* Meny för skärmar större än 768px */}
            <div className="hidden md:flex space-x-7 w-[47vh]">
              <a href="#home" className={styles.navLink}>
                Hem
              </a>
              <a href="#services" className={styles.navLink}>
                Tjänster
              </a>
              <a href="#about" className={styles.navLink}>
                Om oss
              </a>
              <a href="#contact" className={styles.navLink}>
                Kontakt
              </a>
            </div>
            {/* Hamburger meny för skärmar mindre än 768px */}
            <button
              className="md:hidden text-black"
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
            >
              <i className={`${styles.burgerIcon} fas fa-bars`}></i>
            </button>
          </div>

          {/* Menyn som visas när hamburgaren är öppen (endast för små skärmar) */}
          <div
            className={`md:hidden ${isOpen ? "block" : "hidden"} ${styles.customMenu}`}
          >
            <div className={styles.innermeny}>
              <div className={styles.innermenytwo}>
                <a href="#home" className={styles.navLinkbig}>
                  Hem
                </a>
                <a href="#services" className={styles.navLinkbig}>
                  Tjänster
                </a>
                <a href="#about" className={styles.navLinkbig}>
                  Om oss
                </a>
                <a href="#contact" className={styles.navLinkbig}>
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sektion 1 med text och knappar */}
        <div className={styles.containervideo}>
          <div className={styles.containervideodiv}>
          <div className={styles.overlayText}>
            <h2 className={styles.headerin}>Skapa din perfekta stil – vi har erfarenheten och passionen!</h2>
            <p className=" p-1 max-w-[700px] mx-auto">På denna är din nöjdhet vår högsta prioritet. Vi strävar efter att skapa en varm och inbjudande atmosfär där du kan slappna av och känna dig som hemma.
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

      <div className={styles.fixaoverlap}></div>
    </div>
  );
};

export default HomePage;
