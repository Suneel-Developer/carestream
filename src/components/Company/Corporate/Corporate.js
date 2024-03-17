import React from "react";
import { Link } from "react-router-dom";
import styles from "./corporate.module.scss";
import company from "../../../assets/80-company.jpg";
import sustainability from "../../../assets/80-company-sustainability.jpg";
import charity from "../../../assets/80-company-grants-charity.jpg";
import complicance from "../../../assets/80-company-complicance.jpg";
import exceed from "../../../assets/80-company-exceed.jpg";

// Quick Links Images
import careers from "../../../assets/80-company-careers.jpg";
import events from "../../../assets/80-company-news-events.jpg";
import contact from "../../../assets/80-company-contact.jpg";
import Guidelines from "../../../assets/company-logo.jpg";
import solutions from "../../../assets/80-company-government-solutions.png";
import support from "../../../assets/80-company-service-support.jpg";
import purchasing from "../../../assets/80-company-ww-purchasing.png";
import shipping from "../../../assets/80-company-shipping.jpg";
import security from "../../../assets/80-company-corporate-security.jpg";

const Corporate = () => {
  return (
    <section className={styles.__focused__container}>
      <div className={styles.focuesd_container}>
        <div className={styles.__container}>
          <h1 className={styles.__heading}>Corporate Responsibility</h1>

          <div className={styles.__box_container}>
            <div className={styles.__box}>
              <div className={styles.__box_content}>
                <Link to="/sv/se/company/environmental-health-and-safety">
                  <img src={company} alt="company" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/company/environmental-health-and-safety"
                    className={styles.__box_link}
                  >
                    Environmental, Health & Safety
                  </Link>
                  <p className={styles.__box_text}>
                    Carestream Health will conduct business in such a way as to
                    preserve the environment and protect the health and safety
                    of it's employees, neighbors and customers
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/sv/se/company/environmental-health-and-safety/sustainability">
                  <img src={sustainability} alt="sustainability" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/company/environmental-health-and-safety/sustainability"
                    className={styles.__box_link}
                  >
                    Sustainability
                  </Link>
                  <p className={styles.__box_text}>
                    We have a vision for a better world, and as a major
                    contributor to the healthcare field, we must ensure that our
                    actions align with our mission to promote health and
                    wellness globally
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.__box}>
              <div className={styles.__box_content}>
                <Link to="/sv/se/company/grants-charity">
                  <img src={charity} alt="charity" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/company/grants-charity"
                    className={styles.__box_link}
                  >
                    Grants and Charitable Contributions
                  </Link>
                  <p className={styles.__box_text}>
                    Charitable Contributions, Educational Grants, and
                    Independent Research Grants.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/sv/se/company/compliance-ethics">
                  <img src={complicance} alt="complicance" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/company/compliance-ethics"
                    className={styles.__box_link}
                  >
                    Compliance and Ethics
                  </Link>
                  <p className={styles.__box_text}>
                    We do the right things the right way to improve the customer
                    experience through trust, respect, and integrity.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/sv/se/services-and-support/customer-experience-program">
                  <img src={exceed} alt="exceed" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/services-and-support/customer-experience-program"
                    className={styles.__box_link}
                  >
                    Customer Experience Program
                  </Link>
                  <p className={styles.__box_text}>
                    When you succeed, we succeed. As our valued customer, you
                    are the beginning and the end of everything we do. We
                    understand your needs and exceed your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.focuesd_containerr}>
        <div className={styles.__container}>
          <h1 className={styles.__heading}>Quick Links</h1>

          <div className={styles.__box_container}>
            <div className={styles.__box}>
              <div className={styles.__box_content}>
                <Link to="https://careers.carestream.com/">
                  <img src={careers} alt="careers" />
                </Link>
                <div>
                  <Link
                    to="https://careers.carestream.com/"
                    className={styles.__box_link}
                  >
                    Careers @ Carestream
                  </Link>
                  <p className={styles.__box_text}>
                    The work we do matters. From our medical imaging products to
                    our non-destructive testing systems. None of it could be
                    possible without our team of hard-working, talented and
                    caring individuals. So if you are looking for a job with
                    heart, consider joining our team.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/sv/se/newsandevents">
                  <img src={events} alt="events" />
                </Link>
                <div>
                  <Link to="/sv/se/newsandevents" className={styles.__box_link}>
                    News, Events and Social Media
                  </Link>
                  <p className={styles.__box_text}>
                    The latest Carestream news releases, healthcare news and
                    upcoming events.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/contact">
                  <img src={contact} alt="contact" />
                </Link>
                <div>
                  <Link to="/contact" className={styles.__box_link}>
                    Contact Us
                  </Link>
                  <p className={styles.__box_text}>
                    To have a sales rep contact you, please use the sales form.
                    For product information or company questions, please use our
                    general form.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/sv/se/company/brand-guidelines">
                  <img src={Guidelines} alt="Guidelines" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/company/brand-guidelines"
                    className={styles.__box_link}
                  >
                    Carestream Brand Guidelines
                  </Link>
                  <p className={styles.__box_text}>
                    At Carestream, our brand is a promise – a promise of the
                    value we deliver to our customers. To remain strong and
                    vital, it must be used according to our Brand Guidelines.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/sv/se/company/us-government">
                  <img src={solutions} alt="solutions" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/company/us-government"
                    className={styles.__box_link}
                  >
                    Federal Government Solutions
                  </Link>
                  <p className={styles.__box_text}>
                    We work closely with our government customers to ensure that
                    they have access to the latest imaging equipment and
                    services.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.__box}>
              <div className={styles.__box_content}>
                <Link to="/sv/se/services-and-support">
                  <img src={support} alt="support" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/services-and-support"
                    className={styles.__box_link}
                  >
                    Service and Support
                  </Link>
                  <p className={styles.__box_text}>
                    Our worldwide technical and professional services team works
                    alongside your people to ensure your equipment is running at
                    its peak performance.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/sv/se/company/worldwide-purchasing">
                  <img src={purchasing} alt="purchasing" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/company/worldwide-purchasing"
                    className={styles.__box_link}
                  >
                    Worldwide Purchasing
                  </Link>
                  <p className={styles.__box_text}>
                    We are committed to partnering with our suppliers to provide
                    customers with the best possible source of supply for goods
                    and services.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <Link to="/sv/se/company/shipping-and-routing-instructions">
                  <img src={shipping} alt="shipping" />
                </Link>
                <div>
                  <Link
                    to="/sv/se/company/shipping-and-routing-instructions"
                    className={styles.__box_link}
                  >
                    Shipping and Routing
                  </Link>
                  <p className={styles.__box_text}>
                    Shipping and Routing Instructions for US and international.
                  </p>
                </div>
              </div>

              <div className={styles.__box_content}>
                <div>
                  <img src={security} alt="security" />
                </div>
                <div>
                  <h4 className={styles.security_heading}>Corporate Security Office </h4>
                  <div className={styles.u_text_config}>
                    Phone: <Link to="tel:+15856278888">+1-585-627-8888</Link>{" "}
                    24x7
                    <br />
                    Email:
                    <Link to="mailto:corporatesecurity@carestream.com">
                      corporatesecurity@carestream.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
