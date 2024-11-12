import React from "react";
import styles from "./About.module.css";
import image1 from "../../assets/about1.jpg";
import image2 from "../../assets/about2.jpg";
import image3 from "../../assets/about3.jpg";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.purposeSection}>
        <h2>Our Purpose</h2>
        <p>
          We strive to inspire individuals to express their unique style through
          fashion. Our goal is to provide everyone with access to comfortable,
          high-quality, and stylish clothing that fits seamlessly into their
          lives.
        </p>
      </div>

      <div className={styles.communitySection}>
        <div className={styles.text}>
          <h3>Our Team</h3>
          <p>
            We are proud to bring together a team of dedicated professionals who
            believe in the power of fashion to transform how people perceive
            themselves and the world. We’re here to make fashion accessible,
            comfortable, and sustainable.
          </p>
        </div>
        <div className={styles.image}>
          <img src={image3} alt="Our Communities" />
        </div>
      </div>

      <div className={styles.sportSection}>
        <div className={styles.image}>
          <img src={image2} alt="Sport Culture" />
        </div>
        <div className={styles.text}>
          <h3>Sport Culture</h3>
          <p>
            Culture & Values We believe that clothing is not just a way to
            express oneself but also a symbol of culture and belonging. Our
            company supports and promotes diversity and inclusivity, making
            fashion accessible to everyone.
          </p>
        </div>
      </div>

      <div className={styles.responsibilitySection}>
        <div className={styles.text}>
          <h3>Responsibly Made</h3>
          <p>
            We understand our responsibility to both nature and society. All our
            products are created with a commitment to minimizing our
            environmental footprint and ensuring fair working conditions for all
            involved.
          </p>
        </div>
        <div className={styles.image}>
          <img src={image1} alt="Responsibly Made" />
        </div>
      </div>
    </section>
  );
};

export default About;
