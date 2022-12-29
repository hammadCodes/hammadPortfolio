import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <React.StrictMode>
      <>
        <Navbar />
        <Header />
        <AboutMe />
        <HireMe />
        <Services />
        <Portfolio />
        <Testimonails />
        <Contact />
        <Footer />
        <SocialLinks />
      </>
    </React.StrictMode>
  );
}

export default App;
