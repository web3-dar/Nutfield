import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Support from "./components/Support";

const App = () => {
  return (
    <>
      <div className="px-5 lg:px-14 mb-10">
        <Navbar />
        <Hero />
        <Support />
        <About />
      </div>
      <Footer />
    </>
  );
};

export default App;
