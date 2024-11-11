import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MenPage from "./pages/Men/MenPage";
import WomenPage from "./pages/Women/WomenPage";
import NewPage from "./pages/New/NewPage";

import Header from "./components/Header/Header";
import ProductPage from "./sections/ProductSection/ProductSection";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/About/AboutPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="new" element={<NewPage />} />
        <Route path="men" element={<MenPage />} />
        <Route path="women" element={<WomenPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
