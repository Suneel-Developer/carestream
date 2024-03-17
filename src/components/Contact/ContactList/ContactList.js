import React from "react";
import { Link } from "react-router-dom";
import styles from "./contactlist..module.scss";
import { GoDotFill } from "react-icons/go";

const ContactList = () => {
  return (
    <section className={styles.topcontact_container}>
      <div className={styles.contact__container}>
        <div className={styles.contact_leftside}>
          <div className={styles.m_contact_resources_card}>
            <div className={styles.__card_headline}>CORPORATE CONTACTS</div>

            <div className={styles.__card_body}>
              <h6 className={styles.__card_name}>Corporate Security Office</h6>

              <div className={styles.u_text_config}>
                Phone: <Link to="tel:+15856278888">+1-585-627-8888</Link> 24x7
                <br />
                Email:
                <Link to="mailto:corporatesecurity@carestream.com">
                  corporatesecurity@carestream.com
                </Link>
                <br />
              </div>
            </div>
          </div>

          <div className={styles.m_contact_resources_card}>
            <div className={styles.__card_headline}>SERVICE & SUPPORT</div>

            <div className={styles.__card_body}>
              <ul className={styles.product_lists}>
                <li>
                  <Link to="#" className={styles.product_list}>
                    <GoDotFill className={styles.product__list_bullet} />
                    Submit a Service Request
                  </Link>
                </li>

                <li>
                  <Link to="#" className={styles.product_list}>
                    <GoDotFill className={styles.product__list_bullet} />
                    Service and Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.contact_rightside}>
          <div className={styles.m_contact_resources_card}>
            <div className={styles.__card_headline}>SERVICE & SUPPORT</div>
            <div className={styles.__card_body}>
              <div className={styles.body_card}>
                <div className={styles.body_card_card}>
                  <div class="m-contact-resources-card__container">
                    <div class="m-contact-resources-card__contact">
                      <h6 className={styles.a_headline}>Medical&nbsp;</h6>

                      <div className={styles.u_text_config}>
                        Phone:
                        <Link to="tel:+18003282910">+1-800-328-2910</Link>
                        <br />
                        Technical Support Phone:
                        <Link to="tel:+18003282910">+1-800-328-2910</Link>
                        <br />
                        Email:
                        <Link to="mailto:health.imaging.tsc@carestream.com">
                          health.imaging.tsc@carestream.com
                        </Link>
                      </div>
                    </div>

                    <div className={styles.__divider}></div>

                    <div class="m-contact-resources-card__contact">
                      <h6 className={styles.a_headline}>Dental</h6>
                      <div className={styles.u_text_config}>
                        <strong className={styles.text_strong}>
                          Film and Accessories
                        </strong>
                        <br />
                        Phone:
                        <Link to="tel:+18009338031">+1-800-933-8031</Link>
                        <br /> <br />
                      </div>
                    </div>

                    <div className={styles.__divider}></div>

                    <div>
                      <h6 className={styles.a_headline}>
                        Contract Manufacturing
                      </h6>

                      <div className={styles.u_text_config}>
                        Email:
                        <Link to="mailto:info@tollcoating.com">
                          info@tollcoating.com
                        </Link>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.body_card_card}>
                  <h6 className={styles.a_headline}>Non-Destructive Testing</h6>

                  <div className={styles.u_text_config}>
                    Phone: <Link to="tel:+18003282910">+1-800-328-2910</Link>{" "}
                    <br />
                    Email:
                    <Link to="mailto:health.imaging.tsc@carestream.com">
                      health.imaging.tsc@carestream.com
                    </Link>
                    <br /> <br />
                    <strong className={styles.text_strong}>
                      Support for NDT Orders:
                    </strong>
                    <br />
                    Phone: <Link to="tel:+18008100327">+1-800-810-0327</Link>
                    Option 4 <br />
                    Fax: <Link to="tel:+18004459967">+1-800-445-9967</Link>
                    <br />
                    Email:
                    <Link to="mailto:us-hi-digitalorders@carestream.com">
                      us-hi-digitalorders@carestream.com
                    </Link>
                    <br /> <br />
                    <strong className={styles.text_strong}>
                      NDT Parts Service:
                    </strong>
                    <br />
                    Phone:
                    <Link to="tel:+18004317278">
                      +1 866-927-1023&nbsp; Option 1
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.m_contact_resources_card}>
            <div className={styles.__card_headline}>MEDIA & CONTACTS</div>

            <div className={styles.__card_body}>
              <div className={styles.__alternate_rows}>
                <div className={styles.card_column}>
                  <div className={styles.u_text_config1}>
                    <strong className={styles.text_strong}>Laura Teng</strong>
                    <br />
                    <Link to="tel: +01065612366">
                      + 010-65612366 ext 8723
                      <br />
                    </Link>
                    <Link to="mailto:li.teng@carestream.com">
                      li.teng@carestream.com
                    </Link>
                  </div>
                </div>

                <div className={styles.card_column}>
                  <div className={styles.u_text_config1}>
                    <ul>
                      <li className={styles.text_bullet}>
                        <GoDotFill className={styles.product__list_bullet1} />
                        China product/markets news
                      </li>
                      <li className={styles.text_bullet}>
                        <GoDotFill className={styles.product__list_bullet1} />
                        All Carestream Health products
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.__alternate_rows}>
                <div className={styles.card_column}>
                  <div className={styles.u_text_config1}>
                    <strong className={styles.text_strong}>
                      Rossio González
                    </strong>
                    <br />
                    <Link to="tel: +01065612366">
                      +52 (33) 2819-4030
                      <br />
                    </Link>
                    <Link to="mailto:li.teng@carestream.com">
                      rossiomonserrat.gonzalez@carestream.com
                    </Link>
                  </div>
                </div>

                <div className={styles.card_column}>
                  <div className={styles.u_text_config1}>
                    <ul>
                      <li className={styles.text_bullet}>
                        <GoDotFill className={styles.product__list_bullet1} />
                        Latin America products/markets news
                      </li>
                      <li className={styles.text_bullet}>
                        <GoDotFill className={styles.product__list_bullet1} />
                        All Carestream Health products
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.__alternate_rows}>
                <div className={styles.card_column}>
                  <div className={styles.u_text_config1}>
                    <strong className={styles.text_strong}>
                      Snehal Khilari
                    </strong>
                    <br />

                    <Link to="mailto:li.teng@carestream.com">
                      snehal.khilari@carestream.com
                    </Link>
                  </div>
                </div>

                <div className={styles.card_column}>
                  <div className={styles.u_text_config1}>
                    <ul>
                      <li className={styles.text_bullet}>
                        <GoDotFill className={styles.product__list_bullet1} />
                        India product/markets news
                      </li>
                      <li className={styles.text_bullet}>
                        <GoDotFill className={styles.product__list_bullet1} />
                        All Carestream Health products
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.__alternate_rows}>
                <div className={styles.card_column}>
                  <div className={styles.u_text_config1}>
                    <h6 className={styles.a_headline}>Social Media</h6>

                    <strong className={styles.text_strong}>
                      John Crowther
                    </strong>
                    <br />
                    <Link to="mailto:li.teng@carestream.com">
                      socialmedia@carestream.com
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

export default ContactList;
