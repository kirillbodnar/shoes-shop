import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/Home/HomePage";
import MenPage from "./pages/Men/MenPage";
import WomenPage from "./pages/Women/WomenPage";
import NewPage from "./pages/New/NewPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/About/AboutPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import ProductPage from "./pages/Product/ProductPage";
import { persistor, store } from "./store/store";
import Cart from "./components/Cart/Cart";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
};
export default App;
