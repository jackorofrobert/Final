import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./css/font-awesome.css";
import "./App.css";
import "./css/TopButton.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import DogShop from "./pages/DogShop";
import CatShop from "./pages/CatShop";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Detail from "./components/Detail";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [accessToken, setAuhten] = useState(JSON.parse(localStorage.getItem('access_token')) || undefined);
  const location = useLocation();

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    setAuhten(JSON.parse(localStorage.getItem('access_token')) || undefined);
  }, [location]);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setAuhten(undefined);
  }

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
      <div style={{ background: '#ebdbc1' }}>
        <div className="container">
          <Header accessToken={accessToken} logout={handleLogout} />
        </div>
      </div>

      <div className="clear"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/dogs" element={<Dogs />} />
        <Route path="/about/cats" element={<Cats />} />
        <Route path="/shop/dogs" element={<DogShop />} />
        <Route path="/shop/cats" element={<CatShop />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/detail/:title" element={<Detail />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <div className="clear"></div>
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
          Top
        </button>
      )}
    </div>
  );
};

export default App;