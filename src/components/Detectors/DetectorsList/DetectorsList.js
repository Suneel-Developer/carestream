import React from "react";
import { Link } from "react-router-dom";
import styles from "./detectorslist.module.scss";
import Detectorslux35 from "../../../assets/80-detectors-lux35.png";
import Detectorsdrxplus from "../../../assets/80-detectors-drx-plus.png";
import Detectorsdrxplusc from "../../../assets/80-detectors-drx-plus-2530c.png";
import Detectorsdrxlc from "../../../assets/80-detectors-drx-lc.png";
import Detectorsfocus35c from "../../../assets/80-detectors-focus35c.png";

const DetectorsList = () => {
  return (
    <section className={styles._detectors_container}>
      <div className={styles.___container}>
        <div className={styles.___container_box}>
          {/* Detectors 1  */}
          <div className={styles.___container_box_list}>
            <div>
              <img src={Detectorslux35} alt="DR Detectors lux35" />
            </div>
            <div>
              <Link to="#" className={styles._detectors_heading}>
                Lux 35 Detector
              </Link>
              <p className={styles.__subcontent}>
                Meet the new Carestream Lux 35 Detector – our first glass-free
                medical detector. It’s sleek, lightweight and ergonomic design
                provides less strain and stress for radiographers and more
                comfort to the patient.
              </p>
            </div>
          </div>

          {/* Detectors 2  */}
          <div className={styles.___container_box_list}>
            <div>
              <img src={Detectorsdrxplus} alt="DRX Plus Detectors" />
            </div>
            <div>
              <Link to="#" className={styles._detectors_heading}>
                DRX Plus Detectors
              </Link>
              <p className={styles.__subcontent}>
                The original Carestream DRX Detector, the world’s first
                wireless, cassette-sized detector.
              </p>
            </div>
          </div>

          {/* Detectors 3  */}
          <div className={styles.___container_box_list}>
            <div>
              <img src={Detectorsdrxplusc} alt="DRX Plus 2530C Detector" />
            </div>
            <div>
              <Link to="#" className={styles._detectors_heading}>
                DRX Plus 2530C Detector
              </Link>
              <p className={styles.__subcontent}>
                The power of our flagship DRX Plus Detector is also available as
                the small-format DRX Plus 2530C Detector.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.___container_box}>
          {/* Detectors 4  */}
          <div className={styles.___container_box_list}>
            <div>
              <img src={Detectorsfocus35c} alt="Focus Detectors" />
            </div>
            <div>
              <Link to="#" className={styles._detectors_heading}>
                Focus Detectors
              </Link>
              <p className={styles.__subcontent}>
                An affordable way to upgrade to full wireless digital imaging.
              </p>
            </div>
          </div>

          {/* Detectors 5  */}
          <div className={styles.___container_box_list}>
            <div>
              <img src={Detectorsdrxlc} alt="DRX-LC Detector" />
            </div>
            <div>
              <Link to="#" className={styles._detectors_heading}>
                DRX-LC Detector
              </Link>
              <p className={styles.__subcontent}>
                The DRX-L Detector allows capture of long-length images with a
                single exposure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetectorsList;
