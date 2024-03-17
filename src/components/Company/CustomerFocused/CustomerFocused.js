import React from "react";
import { Link } from "react-router-dom";
import styles from "./customerfocused.module.scss";
import CompanyLogo from "../../../assets/company-logo.jpg";
import { GoDotFill } from "react-icons/go";


const CustomerFocused = () => {
  return (
    <section className={styles.focuesd_container}>
      <div className={styles.__container}>
        <h1 className={styles.__heading}>A Customer-Focused Company</h1>

        <div className={styles.__box_container}>
          <div className={styles.__box}>
            <p className={styles.__box_text}>
              We are passionately committed to doing all the right things to
              help our customers be successful. We provide high-value
              technology, products and services through engaged employees who
              drive continuous innovation and operational excellence. The work
              we do matters.
            </p>

            <p className={styles.__box_text}>
              We serve industrial markets around the world with our
              <Link to="#" className={styles.__text_link}>
                non-destructive testing
              </Link>
              &nbsp;products, enabling customers to capture high-quality images
              for applications such as aircraft inspection, assemblies, castings
              and forensics.
            </p>

            <p className={styles.__box_text}>
              We also partner with progressive companies to commercialize
              customer-focused products by applying our
              <Link to="#" className={styles.__text_link}>
                precision roll-to-roll coating
              </Link>
              &nbsp;processes and large-scale manufacturing facilities for
              market opportunities that include energy storage, electronics,
              displays, automotive components and much more.
            </p>

            <p className={styles.__box_text}>
              Learn More in
              <Link
                to="/sv/se/-/media/publicsite/corporate/company-profile/pdf/carestream_company_profile.pdf?display=inline&amp;sc_lang=sv-se"
                target="_blank'"
                className={styles.__text_link}
              >
                Our Company Profile (PDF)
              </Link>
            </p>
          </div>

          <div className={styles.__box}>
            <h5 className={styles.__list_thumb_text}>Leadership </h5>

            <p className={styles.__box_text}>
              Carestream Health's global team of almost 4,000 employees all
              share a commitment to exceed customer expectations. This singular
              focus starts with Carestream's leadership who are fueling the
              company's growth by delivering on the promise to help customers do
              their jobs better, faster and more cost effectively.
            </p>

            <ul>
              <li>
                <Link
                  to="/sv/se/company/board-of-directors"
                  className={styles.__product_list}
                >
                  <GoDotFill className={styles.product__list_bullet} />
                  Board of Directors
                </Link>
              </li>

              <li>
                <Link
                  to="/sv/se/company/board-of-directors"
                  className={styles.__product_list}
                >
                  <GoDotFill className={styles.product__list_bullet} />
                  Executive Biographies
                </Link>
              </li>
            </ul>

            <div className={styles.m_list_thumb_text__link}>
              <a href="/sv/se/company/company-history">
                <img
                  src={CompanyLogo}
                  alt="Carestream"
                  className={styles.m_figure__image}
                />
              </a>
              <div>
                <a href="/sv/se/company/company-history" className={styles.__company_link}>Company History</a>
                <div className={styles.__u_text_config}>
                  Carestream is a worldwide provider of medical imaging systems
                  backed by a global service and support network.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFocused;
