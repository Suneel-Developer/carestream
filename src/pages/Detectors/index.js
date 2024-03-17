import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Detectors/Hero/Hero";
import DetectorsBox from "../../components/Detectors/DetectorsBox/Detectorsbox";
import DetectorsList from "../../components/Detectors/DetectorsList/DetectorsList";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";


const Detectors = () => {
  return (
    <div>
      <Helmet>
        <title>
          DR Detectors
        </title>
      </Helmet>

      <div>
        <Header />
        <Hero />
        <DetectorsBox />
        <DetectorsList />
        <Footer />
      </div>
    </div>
  );
};

export default Detectors;
