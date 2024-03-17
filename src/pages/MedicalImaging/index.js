import React from "react";
import Header from "../../components/Header/Header";
import Box from "../../components/MedicalImaging/Box/Box";
import Hero from "../../components/MedicalImaging/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const MedicalImaging = () => {
  return (
    <div>
      <Helmet>
        <title>Medical Imaging | Healthcare Information Technology | Carestream</title>
      </Helmet>

      <div>
        <Header />
        <Hero />
        <Box />
        <Footer />
      </div>
    </div>
  );
};

export default MedicalImaging;
