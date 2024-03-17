import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaBlog,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles.footer_container}>
      <div className={styles.footer_container__content}>
        <div className={styles.o_footer_columns}>
          <div>
            <h5 className={styles.footer__title}>Company</h5>
            <ul>
              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Careers
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Board of Directors
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  News and Events
                </Link>
              </li>

              <li>
                <Link to="/company" className={styles.__a_list_link}>
                  Company History
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.footer__title}>Support</h5>
            <ul>
              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Safety Data Sheets
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Service and Support
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Worldwide Contacts
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Environmental, Health and Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className={styles.footer__title}>Businesses</h5>
            <ul>
              <li>
                <Link to="/detectors" className={styles.__a_list_link}>
                  Medical Imaging
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Non-Destructive Testing
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Contract Manufacturing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.footer__title}>Logistics</h5>
            <ul>
              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Shipping and Routing
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Worldwide Purchasing
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__a_list_link}>
                  Federal Government Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.o_footer}>
          <ul className={styles.o_footer__social}>
            <li className={styles.__social_icons}>
              <Link
                to="https://twitter.com/carestream"
                target="_blank"
                className={styles.__social_icon}
              >
                <FaTwitter />
              </Link>
            </li>
            <li className={styles.__social_icons}>
              <Link
                to="http://www.facebook.com/carestream"
                target="_blank"
                className={styles.__social_icon}
              >
                <FaFacebookF />
              </Link>
            </li>
            <li className={styles.__social_icons}>
              <Link
                to="http://www.linkedin.com/company/carestream-health"
                className={styles.__social_icon}
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className={styles.__social_icons}>
              <Link
                to="https://www.carestream.com/blog"
                target="_blank"
                className={styles.__social_icon}
              >
                <FaBlog />
              </Link>
            </li>
            <li className={styles.__social_icons}>
              <Link
                to="http://www.YouTube.com/Carestream"
                target="_blank"
                className={styles.__social_icon}
              >
                <FaYoutube />
              </Link>
            </li>
            <li className={styles.__social_icons}>
              <Link
                to="https://www.instagram.com/carestreamhealth"
                target="_blank"
                className={styles.__social_icon}
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>

          <div className={styles.o_footer__politics}>
            <ul className={styles.m_politics__list}>
              <li  className={styles.a_list_item}>
                <Link to="/sv/se/rx-only" title="Rx Only" className={styles.a_list_link}>
                  Rx Only
                </Link>
              </li>
              <li  className={styles.a_list_item}>
                <Link to="/sv/se/site-terms" className={styles.a_list_link}>
                  Site Terms
                </Link>
              </li>
              <li className={styles.a_list_item}>
                <Link to="/sv/se/privacy-notice" className={styles.a_list_link}>
                  Privacy Notice
                </Link>
              </li>
            </ul>
            <small className={styles.m_politics__text}>
              © 2024 Carestream Health. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
