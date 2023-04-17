import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";
import Tawk from "./components/Tawk.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      {/* <Contact /> */}
      <Footer />
      <Tawk />
    </>
  );
}

export default App;
