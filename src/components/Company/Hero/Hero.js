import React from "react";
import MobileNavbar from "../../MobileNavbar/MobileNavbar";
import Navbar from "../../Navbar/Navbar";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero_mainContainer}>
      <Navbar />
      <MobileNavbar />

      <div className={styles.hero_container}>
        <div className={styles.hero_content_container}>
          <h1 className={styles.hero_heading}>COMPANY</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
