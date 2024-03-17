import React from "react";
import styles from "./notificatio.module.scss";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Notifaction = () => {
  return (
    <section className={styles.notifaction_container}>
      <div className={styles.__container}>
        <h2 className={styles.__heading}>Legal Notifications</h2>
        <div className={styles.___boxes}>
          <div className={styles.__box}>
            <strong className={styles.__subheading}>IRS Form 8937</strong>
            <p className={styles.__content}>
              Shareholders can access IRS Form 8937, Report of Organizational
              Actions Affecting Basis of Securities by downloading the PDF
              documents at the following links:
            </p>
            <em className={styles.__text_em}>
              A password is required to open the document.
            </em>
          </div>

          <div className={styles.__box}>
            <ul>
              <li>
                <Link to="#" className={styles.__box_bullets}>
                  <GoDotFill className={styles.__bullet_dot} />
                  <span>
                    IRS Form 8937 Common Stock Distribution 7-25-2013 (PDF)
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.__box_bullets}>
                  <GoDotFill className={styles.__bullet_dot} />
                  <span>
                    IRS Form 8937 Common Stock Distribution 6-7-2013 (PDF)
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.__box_bullets}>
                  <GoDotFill className={styles.__bullet_dot} />
                  <span>
                    IRS Form 8937 Class A Preferred Stock Distribution 6-7-2013
                    (PDF)
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.__box_bullets}>
                  <GoDotFill className={styles.__bullet_dot} />
                  <span>
                    IRS Form 8937 Class A Preferred Stock Distribution
                    12-17-2012 (PDF)
                  </span>
                </Link>
              </li>

              <li>
                <Link to="#" className={styles.__box_bullets}>
                  <GoDotFill className={styles.__bullet_dot} />
                  <span>
                    IRS Form 8937 Class A Preferred Stock Distribution 2-25-2011
                    (PDF)
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifaction;
