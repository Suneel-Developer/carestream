import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import { FaHome, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  // Dropown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  // handleCountrySelection 
  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    toggleDropdown(); // Close the dropdown after selecting a country, if needed
    // You can also redirect to the selected country's page here if required
  };

  return (
    <div className={styles.headertopna}>
      <div className={styles.header_top_nav}>
        <div className={styles.topnav_container}>
          <div className={styles.m_topnav__item}>
            <Link to="/" className={styles.m_topnav__item_link}>
              <FaHome className={styles.m_topnav_homeicon} />
            </Link>
          </div>

          <div className={styles.m_topnav__item}>
            <Link
              to="/company"
              title="Company"
              className={styles.m_topnav__item_link}
            >
              Company
            </Link>
          </div>

          <div className={styles.m_topnav__item}>
            <Link to="#" className={styles.m_topnav__item_link}>
              Careers
            </Link>
          </div>

          <div className={styles.m_topnav__item}>
            <Link
              to="/contact"
              title="Contact Us"
              className={styles.m_topnav__item_link}
            >
              Contact Us
            </Link>
          </div>

          <div className={styles.m_topnav__item}>
            <div className={styles.countryLanguesSelector} ref={dropdownRef}>
              <Link
                to="#"
                className={styles.m_topnav__item_link}
                onClick={toggleDropdown}
              >
               {selectedCountry}
                <FaAngleDown className={styles.m_topnav_downarrowicon} />
              </Link>

              {/* Language Dropdown  */}
              {dropdownOpen && (
                <div className={styles.m_country_list}>
                  <h5 className={styles.m_country_list__headline}>
                    Select your location
                  </h5>
                  <div className={styles.m_country_list__items}>
                    <ul className={styles.a_list_country}>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Argentina')}>
                          Argentina
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Australia')}>
                          Australia
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Austria')}>
                          Austria
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Belgique – Luxembourg')}>
                          Belgique – Luxembourg
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Belgium – België')}>
                          Belgium – België
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Brazil')}>
                          Brazil
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Canada - English')}>
                          Canada - English
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Canada - Français')}>
                          Canada - Français
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Chile')}>
                          Chile
                        </Link>
                      </li>
                    </ul>
                    <ul className={styles.a_list_country}>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('China')}>
                          China
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Colombia')}>
                          Colombia
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Denmark')}>
                          Denmark
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Finland')}>
                          Finland
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link}onClick={() => handleCountrySelection('France')}>
                          France
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link}onClick={() => handleCountrySelection('Germany')}>
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link}onClick={() => handleCountrySelection('Greece')}>
                          Greece
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link}onClick={() => handleCountrySelection('India')}>
                          India
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link}onClick={() => handleCountrySelection('Italy')}>
                          Italy
                        </Link>
                      </li>
                    </ul>
                    <ul className={styles.a_list_country}>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Japan')}>
                          Japan
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Korea')}>
                          Korea
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('México')}>
                          México
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Netherlands')}>
                          Netherlands
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('New Zealand')}>
                          New Zealand
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Norway')}>
                          Norway
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Peru')}>
                          Peru
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Portugal')}>
                          Portugal
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Russia')}>
                          Russia
                        </Link>
                      </li>
                    </ul>

                    <ul className={styles.a_list_country}>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Spain - España')}>
                          Spain - España
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Sweden')}>
                          Sweden
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Switzerland')}>
                          Switzerland
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('Turkey')}>
                          Turkey
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('United Kingdom')}>
                          United Kingdom
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={styles.a_list_link} onClick={() => handleCountrySelection('United States')}>
                          United States
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.m_topnav__item}>
            <Link to="#" className={styles.m_topnav__item_link}>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
