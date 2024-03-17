import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Company/Hero/Hero";
import CustomerFocused from "../../components/Company/CustomerFocused/CustomerFocused";
import Corporate from "../../components/Company/Corporate/Corporate";
import Notifaction from "../../components/Company/Notifaction/Notifaction";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const Company = () => {
  return (
    <div>
      <Helmet>
        <title>Company</title>
      </Helmet>

      <div>
        <Header />
        <Hero />
        <CustomerFocused />
        <Corporate />
        <Notifaction />
        <Footer />
      </div>
    </div>
  );
};

export default Company;
