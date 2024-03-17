import React from "react";
import ContactList from "../../components/Contact/ContactList/ContactList";
import Hero from "../../components/Contact/Hero/Hero";
import Map from "../../components/Contact/Map/Map";
import TopDetails from "../../components/Contact/TopDetails/TopDetails";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      <div>
        <Header />
        <Hero />
        <TopDetails />
        <ContactList />
        <Map />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
