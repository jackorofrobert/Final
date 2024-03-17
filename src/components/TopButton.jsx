import React, { useState, useEffect } from "react";
import "../css/TopButton.css";

function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log(window.pageXOffset);
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        type="button"
        onClick={scrollToTop}
        className={`scroll-to-top ${isVisible ? "show" : ""}`}
        id="myBtn"
      >
        Back to top
      </button>
    )
  );
}

export default TopButton;
