import React from "react";
import { Link } from "react-router-dom";
import styles from "./topdetails.module.scss";

const TopDetails = () => {
  return (
    <section className={styles.topcontact_container}>
      <div className={styles.contact__container}>
        <div className={styles.contact_leftside}>
          <div className={styles.a_headline__title}>Carestream Health, Inc</div>
          <div className={styles.u_text_config}>
            150 Verona Street <br />
            Rochester, NY 14608 <br />
            Phone: <a href="tel:+15856271800">+1 585-627-1800</a> <br />
            Toll Free: <a href="tel:+18887772072">+1-888-777-2072</a>
          </div>
        </div>

        <div className={styles.contact_rightside}>
          <div className={styles.u_text_config}>
            <div className={styles.a_headline__title}>How can we help?</div>
            Select an option below to contact us with a general question/comment
            or if you are interested in our products or services.
            <div className={styles.o_help__buttons}>
              <Link
                to="#"
                title="General Inquiries"
                className={styles.o_help__button}
              >
                General Requests
              </Link>

              <Link
                to="#"
                title="Sales Inquiries"
                className={styles.o_help__button}
              >
                Sales Requests
              </Link>

              <Link
                to="#"
                title="Worldwide Contacts"
                className={styles.o_help__button}
              >
                Worldwide Contacts
              </Link>
            </div>
            
            <div className={styles.o_help__call}>
              If you have a service request please call
              <Link to="tel:1-800-328-2910"> 1-800-328-2910</Link> or
              <Link to="#"> submit a request</Link>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDetails;
