import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testymonials from "./components/Testymonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="px-6 pt-20 mx-auto max-w-7xl">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testymonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
