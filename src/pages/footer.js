import React from 'react';
import styles from '../styles/footer.module.css'; // Importera CSS-modulen

const Footer = ({ darkMode }) => {
    return (
        <footer className={`${styles.footer} ${darkMode ? styles.dark : ''}`}
        style={{
            backgroundColor: darkMode ? '#5f5f5f' : '', // Bakgrundsfärg beroende på darkMode
          }}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerColumn}>
                        <div className={styles.contactInfo}>
                            <h4>Kontakta oss</h4>
                            <p>Address: engata 1, 12345 Stad</p>
                            <p>Email: info@yourcompany.com</p>
                        </div>
                        <div className={styles.socialMedia}>
                            <h4>Sociala Medier</h4>
                            <div className={styles.icons}>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.phoneNumbers}>
                            <h4>Telefonnummer</h4>
                            <p>+46 123 456 789</p>
                        </div>
                    </div>
                </div>
                <p className={styles.copyright}>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
