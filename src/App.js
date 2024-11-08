import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import MenSection from "./components/MenSection/MenSection";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MenSection />
    </div>
  );
};

export default App;
