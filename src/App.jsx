import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/TopButton.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisibility();
    };
    window.addEventListener("scroll", handleScroll);
    toggleVisibility();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleVisibility]);
  return (
    <div>
      <div className="container">
        <Header />
      </div>
      <div className="clear"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/dogs" element={<Dogs />} />
        <Route path="/about/cats" element={<Cats />} />
      </Routes>
      <div className="container-fluid bg-footer">
        <Footer />
      </div>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className={`scroll-to-top ${isVisible ? "show" : ""}`}
          id="myBtn"
        >
          Back to top
        </button>
      )}
    </div>
  );
};

export default App;