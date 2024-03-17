import React, { useState } from "react";
import styles from "./mobilenavbar.module.scss";
import carestreamlogo from "../../assets/carestream-logo-orange.png";
import burgerBar from "../../assets/burger-bar.png";
import { Link } from "react-router-dom";
import { FaAngleDown, FaTimes, FaAngleRight, FaHome } from "react-icons/fa";

const MobileNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [faqDropdown, setFaqDropdown] = useState(false);
  const [faqCompanyDropdown, setFaqCompanyDropdown] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
    if (faqDropdown) {
      setFaqDropdown(false);
    }
  };

  const toggleFaqDropdown = () => {
    setFaqDropdown(!faqDropdown);
  };

  const toggleCompanyNavbar = () => {
    setNavbar(!navbar);
    if (faqCompanyDropdown) {
      setFaqCompanyDropdown(false);
    }
  };

  const toggleCompanyDropdown = () => {
    setFaqCompanyDropdown(!faqCompanyDropdown);
  };

  return (
    <section className={styles._header_container}>
      <div style={{ width: "100%" }}>
        <div className={styles.header_top}>
          {/* Logo  */}
          <Link to="/">
            <img src={carestreamlogo} alt="carestreamlogo" loading="lazy" />
          </Link>

          {/* Toggle Btns  */}
          <button onClick={toggleNavbar} className={styles.togglebtn}>
            {navbar ? (
              <FaTimes className={styles._toggleicons} />
            ) : (
              <img
                src={burgerBar}
                alt="burgerBar"
                className={styles._toggleicons}
              />
            )}
          </button>
        </div>

        {/* Links dropdown  */}
        <div
          className={`${styles.headerContainer} ${
            navbar ? styles.visible : ""
          }`}
          id="navbar-default"
        >
          <ul className={styles.__header_ullinks}>
            {/* Businesses  */}
            <div>
              <li className={styles.busines_link} onClick={toggleFaqDropdown}>
                Businesses <FaAngleDown className={styles._header_downarrow} />
              </li>

              {faqDropdown && (
                <div className={styles.business_dropdwon_links}>
                  <Link to="#" className={styles.category_link}>
                    Medical Imaging <FaAngleRight />
                  </Link>
                  <Link to="#" className={styles.category_link}>
                    Non-Destructive Testing (NDT)
                    <FaAngleRight />
                  </Link>
                  <Link to="#" className={styles.category_link}>
                    Contract Manufacturing <FaAngleRight />
                  </Link>
                </div>
              )}
            </div>

            {/* Company Dropdown  */}
            <div className={styles.company_drop_header}>
              <li
                className={styles.busines_link}
                onClick={toggleCompanyDropdown}
              >
                Company <FaAngleDown className={styles._header_downarrow} />
              </li>

              {faqCompanyDropdown && (
                <div className={styles.business_dropdwon_links}>
                  <div className={styles.__a_list_links}>
                    <h5 className={styles.__a_list_header}>Company</h5>
                    <ul className={styles.__a_list}>
                      <li>
                        <Link
                          to="/company"
                          target=""
                          className={styles.__a_list_link}
                        >
                          Company Information
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Executive Biographies
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Company History
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          News and Events
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Environmental, Health and Safety
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.__a_list_links}>
                    <h5 className={styles.__a_list_header}>Support</h5>
                    <ul className={styles.__a_list}>
                      <li>
                        <Link
                          to="/contact"
                          target=""
                          className={styles.__a_list_link}
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Worldwide Contacts
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Service and Support
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Submit a Service Request
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Safety Data Sheets
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.__a_list_links}>
                    <h5 className={styles.__a_list_header}>Logistics</h5>
                    <ul className={styles.__a_list}>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Federal Government Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Shipping and Routing
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="" className={styles.__a_list_link}>
                          Worldwide Purchasing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <li className={styles.m_topnav__item_links}>
              <Link to="/" className={styles.m_topnav__item_link}>
                <FaHome className={styles.m_topnav_homeicon} />
              </Link>
            </li>

            <li className={styles.m_topnav__item_links}>
              <Link
                to="/company"
                title="Company"
                className={styles.m_topnav__item_link}
              >
                Company
              </Link>
            </li>

            <li className={styles.m_topnav__item_links}>
              <Link
                to="#"
                target="_blank"
                className={styles.m_topnav__item_link}
              >
                Careers
              </Link>
            </li>
            <li className={styles.m_topnav__item_links}>
              <Link
                to="/contact"
                title="Contact Us"
                className={styles.m_topnav__item_link}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <input type="text" className={styles._search_input} />
        </div>
      </div>
    </section>
  );
};

export default MobileNavbar;
