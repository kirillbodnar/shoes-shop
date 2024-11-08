import React from 'react';
import styles from './HeroSection.module.css';
import backgroundImage from '../../assets/hero-background.jpg';

const HeroSection = () => {
    return (
        <section className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Holiday 2024</h1>
                <p className={styles.subtitle}>Celebrate in style</p>
                <div className={styles.buttons}>
                    <a href="#men" className={styles.button}>Gifts for him</a>
                    <a href="#women" className={styles.button}>Gifts for her</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;