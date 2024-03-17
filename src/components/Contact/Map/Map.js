import React from "react";
import styles from "./map.module.scss";

const Map = () => {
  return (
    <section className={styles.map_container}>
      <div className={styles.container}>
        <h1 className={styles.iframe_heading}>Corporate Office</h1>

        <div className={styles.iframe__container}>
          <iframe
            width="100%"
            height="1000"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23282.785032534317!2d-77.6211319697251!3d43.16021617021901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b45991a6d52d%3A0x964a9b714d6682e2!2sCarestream+Health%2C+Inc!5e0!3m2!1sen!2sus!4v1562676137632!5m2!1sen!2sus"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="iFrameResizer0"
            data-gtm-yt-inspected-1625900_60="true"
            data-gtm-yt-inspected-1625900_61="true"
            data-gtm-yt-inspected-1625900_62="true"
            data-gtm-yt-inspected-1625900_76="true"
            data-gtm-yt-inspected-4="true"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
