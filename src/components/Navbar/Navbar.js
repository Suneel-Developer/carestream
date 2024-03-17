import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import whitelogo from "../../assets/carestream-logo-white.png";
import orangelogo from "../../assets/carestream-logo-orange.png";
import { FaAngleDown, FaTimes, FaSearch, FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search Input Show
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <section
      className={`${styles.navbar_container} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.nav_container}>
        <div className={styles.navlinks_logo}>
          <div>
            <Link to="/">
              {isScrolled ? (
                <img src={orangelogo} alt="carestream" />
              ) : (
                <img src={whitelogo} alt="carestream" />
              )}
            </Link>
          </div>

          <ul className={styles.nav_links}>
            {/* Businesses Link and Dropdown  */}
            <li className={styles.header_nav__link_item}>
              <Link to="#" className={styles.header_nav__link}>
                Businesses <FaAngleDown className={styles.nav_icon} />
              </Link>

              <div className={styles.header_nav__link_container}>
                <div className={styles.__link_content}>
                  <div className={styles.category_links}>
                    <Link to="/medicalimaging" className={styles.category_link}>
                      Medical Imaging <FaAngleRight />
                    </Link>
                  </div>
                  <div className={styles.category_links}>
                    <Link to="/" className={styles.category_link}>
                      Non-Destructive Testing (NDT)
                      <FaAngleRight />
                    </Link>
                  </div>
                  <div className={styles.category_links}>
                    <Link to="/" className={styles.category_link}>
                      Contract Manufacturing <FaAngleRight />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* Company Link and Dropdown  */}

            <li className={styles.header_nav__link_item}>
              <Link to="#" className={styles.header_nav__link}>
                Company <FaAngleDown className={styles.nav_icon} />
              </Link>

              <div className={styles.header_nav__link_company_container}>
                <div className={styles.__link_content}>
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
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.header_nav__search}>
          {/* Search Input  */}
          {isSearchOpen && (
            <div className={styles.search_input_container}>
              <div className={styles.search_input}>
                <input
                  type="text"
                  placeholder="Search"
                  className={styles.form_control}
                />

                {/* close search input  */}
                <button onClick={handleSearchClick}>
                  <FaTimes className={styles.nav_timesicon} />
                </button>
              </div>
            </div>
          )}

          {/* Search btn  */}
          <button className={styles.search_button} onClick={handleSearchClick}>
            <FaSearch className={styles.nav_search_icon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
