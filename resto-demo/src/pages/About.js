import React, { useEffect, useRef } from "react";
import picture from '../assets/nybild.jpg';
import styles from '../styles/aboutus.module.css';

const About = ({ darkMode }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            },
            {
                threshold: 0.2,
            }
        );
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div id="oss" className={`${styles.container} ${darkMode ? styles.dark : ""}`} style={{
            backgroundColor: darkMode ? '#5f5f5f' : 'transparent', // Bakgrundsfärg beroende på darkMode
          }}>
            <div className={styles.containertwo}>
                <div className={styles.textContent}>
                    <h1 className="text-3xl font-bold">Om oss</h1>
                    <p className="mt-3">
                        Välkommen till vår frisörsalong! Vi brinner för att ge våra kunder den bästa hårvården och skapa en minnesvärd upplevelse varje gång. 
                        Vårt team av erfarna frisörer är här för att hjälpa dig att hitta den stil som passar just dig, oavsett om du söker en trendig klippning, 
                        en personlig och professionell service som får dig att känna dig trygg och snygg. Kom in till oss och låt oss ge dig den frisyr du drömmer om!
                    </p>
                </div>
                <img 
                    src={picture} 
                    alt="Frisörsalong"
                    className={styles.image}
                    ref={imageRef} // Använda ref för att observera bilden
                />
            </div>
        </div>
    );
};


export default About;
