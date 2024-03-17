import React from "react";
import Navbar from "../../Navbar/Navbar";
import MobileNavbar from "../../MobileNavbar/MobileNavbar";
import styles from "./hero.module.scss";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={styles.hero_mainContainer}>
      <Navbar />
      <MobileNavbar />

      <div className={styles.hero_container}>
        <div className={styles.hero_content_container}>
          <div>
            <h1 className={styles.hero_heading}>IDEAS THAT CLEARLY WORK</h1>
            <p className={styles.hero_content}>
              A worldwide provider of X-ray imaging systems for medical,
              non-destructive testing and precision contract coating services
              for a wide range of industrial, medical and electronic
              applications.
            </p>
          </div>

          <div className={styles.links_container}>
            <Link
              to="/medicalimaging"
              className={styles.links_container__link}
            >
              Medical Imaging <FaAngleRight className={styles.__rightarrow} />
            </Link>

            <Link
              to="#"
              className={styles.links_container__link}
            >
              Non-Destructive Testing
              <FaAngleRight className={styles.__rightarrow} />
            </Link>

            <Link
              to="#"
              className={styles.links_container__link}
            >
              Contract Manufacturing
              <FaAngleRight className={styles.__rightarrow} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
