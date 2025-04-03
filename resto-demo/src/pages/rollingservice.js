import React, { useEffect, useRef } from "react";
import styles from "../styles/Services.module.css"; // Om du använder en CSS-fil

const Services = ({ darkMode }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible); // Lägg till 'visible' när kartan är synlig
                }
            },
            {
                threshold: 0.3, // Triggas när 30% av kartan är synlig
            }
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => {
            if (mapRef.current) {
                observer.unobserve(mapRef.current);
            }
        };
    }, []);

    return (
        <div className={`${styles.mainContainer} ${darkMode ? styles.dark : styles.light}`} style={{
            backgroundColor: darkMode ? '#5f5f5f' : 'transparent', // Bakgrundsfärg beroende på darkMode
          }}>
            <div className={styles.innerContainer}>
                <div className={styles.contactInfo}>
                    <h2>Kontaktinformation</h2>
                    <p>Företagets adress: Exempelgatan 12, Stockholm</p>
                    <p>Telefon: +46 123 456 789</p>
                    <p>Email: info@foretag.se</p>
                </div>

                <div className={styles.mapContainer} ref={mapRef}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54450.969949909784!2d20.877326546966845!3d64.7553817608884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467ebf279f447101%3A0x4034506de8c8580!2sSkellefte%C3%A5!5e0!3m2!1sen!2sse!4v1743673704357!5m2!1sen!2sse"
                        height={400}
                        width={490}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Services;
