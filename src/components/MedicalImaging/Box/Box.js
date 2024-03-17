import React from "react";
import styles from "./box.module.scss";
import medicalradiolgraphy2 from "../../../assets/row-medical-radiolgraphy2.png";
import rowmedical from "../../../assets/row-medical-computed-radiography.png";
import analog_horizon from "../../../assets/row-medical-analog-horizon.jpg";
import medicalsoftware from "../../../assets/row-medical-software.png";
import medicalprinting from "../../../assets/row-medical-printing.png";
import medicaldental from "../../../assets/row-medical-dental.png";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const Box = () => {
  return (
    <section className={styles.box_container}>
      <div className={styles.___container}>
        {/* Box 1  */}
        <div className={styles.__box}>
          <div className={styles.__box_main}>
            <div className={styles.__box_leftside}>
              <div className={styles.__box_image}>
                <img src={medicalradiolgraphy2} alt="medical radiolgraphy2" />
              </div>
            </div>
            <div className={styles.__box_rightside}>
              <Link to="#" className={styles._headding}>
                Digital Radiography (DR)
              </Link>
              <strong className={styles.__strong}>
                Quality Images. Quality Care.
              </strong>
              <p className={styles.__content}>
                There's a smarter way to go digital with the Carestream family
                of DR systems. Our full line of DR Detectors, Mobile X-Ray,
                X-Ray Rooms, Fluoroscopy, and DR Retrofit Solutions combines
                compatible, scalable components to meet today's needs and
                position you for tomorrow's growth.
              </p>

              <ul className={styles.__bullets}>
                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    Digital Radiography Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Box 2  */}
        <div className={styles.__box}>
          <div className={styles.__box_main}>
            <div className={styles.__box_rightside}>
              <Link to="#" className={styles._headding}>
                Computed Radiography (CR)
              </Link>
              <strong className={styles.__strong}>
                Upgrade From Film to Digital.
              </strong>
              <p className={styles.__content}>
                Carestream’s Computed Radiography systems can accommodate small
                private practices to midsized hospitals and imaging centers.
                Compact and reliable, our CR systems fit your budget and
                integrate seamlessly into your workflow.
              </p>

              <ul className={styles.__bullets}>
                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    DIRECTVIEW Classic CR System
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    Vita Flex CR System
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.__box_leftside}>
              <div className={styles.__box_image}>
                <img src={rowmedical} alt="rowmedical" />
              </div>
            </div>
          </div>
        </div>

        {/* Box 3  */}
        <div className={styles.__box}>
          <div className={styles.__box_main}>
            <div className={styles.__box_leftside}>
              <div className={styles.__box_image}>
                <img src={analog_horizon} alt="analog horizon" />
              </div>
            </div>
            <div className={styles.__box_rightside}>
              <h2 className={styles._headding2}>Analog</h2>
              <strong className={styles.__strong}>
                Fully Featured. Economical Price.
              </strong>
              <p className={styles.__content}>
                The Analog CARESTREAM Systems have just the right configuration
                to meet your most pressing needs in the present, with a clear
                upgrade path for the future. All at a surprisingly affordable
                price.
              </p>

              <ul className={styles.__bullets}>
                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    Horizon X-ray System
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Box 4  */}
        <div className={styles.__box}>
          <div className={styles.__box_main}>
            <div className={styles.__box_rightside}>
              <h2 className={styles._headding2}>Software</h2>
              <strong className={styles.__strong}>Powered by Eclipse.</strong>
              <p className={styles.__content}>
                Eclipse is the engine that drives Carestream’s CR and DR imaging
                software. Eclipse uses AI technology and proprietary algorithms
                to significantly increase the value of the entire imaging chain,
                from capture to diagnosis.
              </p>

              <ul className={styles.__bullets}>
                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    ImageView Software
                  </Link>
                </li>

                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    Image Suite Software
                  </Link>
                </li>

                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    DIRECTVIEW Software
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.__box_leftside}>
              <div className={styles.__box_image}>
                <img src={medicalsoftware} alt="medical software" />
              </div>
            </div>
          </div>
        </div>

        {/* Box 5  */}
        <div className={styles.__box}>
          <div className={styles.__box_main}>
            <div className={styles.__box_leftside}>
              <div className={styles.__box_image}>
                <img src={medicalprinting} alt="medical printing" />
              </div>
            </div>
            <div className={styles.__box_rightside}>
              <h2 className={styles._headding2}>Printing Systems</h2>
              <strong className={styles.__strong}>
                Options for Printing Excellence.
              </strong>
              <p className={styles.__content}>
                Carestream’s DRYVIEW Laser Imaging Systems offer a complete
                diagnostic imaging portfolio. Our systems make it easy and
                affordable to meet your needs today and tomorrow.
              </p>

              <ul className={styles.__bullets}>
                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    DRYVIEW Laser Imagers and DRYVIEW Film Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Box 4  */}
        <div className={styles.__box}>
          <div className={styles.__box_main}>
            <div className={styles.__box_rightside}>
              <h2 className={styles._headding2}>Dental</h2>
              <strong className={styles.__strong}>
                A Century of Leadership.
              </strong>
              <p className={styles.__content}>
                For over 100 years, we’ve provided industry-leading solutions
                for dental professionals. With Carestream Dental Film, you can
                be confident in superb intraoral and extraoral diagnostic images
                quickly, easily and reliably.
              </p>

              <ul className={styles.__bullets}>
                <li>
                  <Link to="#" className={styles.__bullet}>
                    <GoDotFill className={styles.__bullet_dot} />
                    Dental
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.__box_leftside}>
              <div className={styles.__box_image}>
                <img src={medicaldental} alt="medical dental" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box;
