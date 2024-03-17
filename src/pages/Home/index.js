import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Home/Hero/Hero";
import styles from "./home.module.scss";
import { GoDotFill } from "react-icons/go";
import Spotlight from "../../assets/Spotlight.jpg";
import RowCompany from "../../assets/row-company-press-release.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Carestream - Home</title>
      </Helmet>

      <div>
        <Header />
        <Hero />

        <section className={styles.hero_main_container}>
          <div className={styles.hero_products_container}>
            <div className={styles.hero_container}>
              <div className={styles.product}>
                <h2 className={styles.product_title}>
                  Innovation. Quality. Trust.
                </h2>
                <strong className={styles.product_subtitle}>
                  Carestream is a vibrant global company with a proven history
                  of superb imaging technology and unparalleled service.
                </strong>
                <p className={styles.product_text1}>
                  That history is now poised to continue, creating imaging
                  solutions that provide our customers with quantifiable gains
                  and real-world benefits. Carestream has always been here for
                  you. We always will be. Together, let’s continue to shape the
                  future of imaging.
                </p>

                <ul className={styles.product_lists}>
                  <li>
                    <Link to="#" className={styles.product_list}>
                      <GoDotFill className={styles.product__list_bullet} />
                      Board of Directors
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className={styles.product_list}>
                      <GoDotFill className={styles.product__list_bullet} />
                      Executive Biographies
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className={styles.product_list}>
                      <GoDotFill className={styles.product__list_bullet} />
                      Company History
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className={styles.product_list}>
                      <GoDotFill className={styles.product__list_bullet} />
                      Company Profile (PDF)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.product}>
                <h2 className={styles.product_title}>Product Spotlight</h2>
                <Link to="#" className={styles.product_subtitle1}>
                  Focus Retrofit DR Systems{" "}
                </Link>
                <Link to="#" className={styles.product_gallery}>
                  <img src={Spotlight} alt="Spotlight" />
                </Link>
                <p className={styles.product_text1}>
                  An ideal solution to help customers with a smooth, effortless
                  transition to DR, Carestream's Focus Retrofit DR Systems help
                  deliver an easier workflow, improved image quality, and an
                  enhanced user and patient experience—boosting the value of
                  existing equipment for maximum ROI.
                </p>
                <button className={styles.product___btn}>Learn More</button>
              </div>
              <div className={styles.product}>
                <h2 className={styles.product_title}>Latest Press Release</h2>
                <strong className={styles.product_subtitle}>
                  ROCHESTER, N.Y., February 26{" "}
                </strong>
                <Link to="#" className={styles.product_gallery}>
                  <img
                    src={RowCompany}
                    alt="Carestream to Showcase Innovation at ECR 2024"
                  />
                </Link>
                <strong className={styles.product__text2}>
                  Carestream to Showcase Innovation at ECR 2024
                </strong>
                <p className={styles.product_text1}>
                  Carestream Health will exhibit its expanding portfolio of
                  innovative, industry-leading medical imaging solutions at the
                  annual European Congress of Radiology (ECR)
                </p>
                <ul className={styles.product_lists}>
                  <li>
                    <Link to="#" className={styles.product_list}>
                      <GoDotFill className={styles.product__list_bullet} />
                      Read the full Release
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className={styles.product_list}>
                      <GoDotFill className={styles.product__list_bullet} />
                      All News Releases
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
