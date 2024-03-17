import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import styles from "./detectorsbox.module.scss";
import Detectors from "../../../assets/piu-dr-detectors-2.jpg";

const Detectorsbox = () => {
  return (
    <section className={styles._detectors_container}>
      <div className={styles.___container}>
        <div className={styles.__leftside}>
          <img src={Detectors} alt="DR Detectors" />
        </div>
        <div className={styles.__rightside}>
          <h1 className={styles.__heading}>
            Setting new standards in efficiency and reliability
          </h1>
          <p className={styles.__subcontent}>
            Carestream provides a number of DR detector options, including a
            variety of sizes with Cesium Scintillators, and now a glass-free
            option. This allows you to select just the right one for your
            facility, your workflow and your budget.{" "}
          </p>
          <Link to="#" className={styles.__bullet}>
            <GoDotFill className={styles.__bullet_dot} />
            DR Detectors Brochure (PDF)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Detectorsbox;
