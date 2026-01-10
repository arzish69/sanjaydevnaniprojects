"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [onDarkBg, setOnDarkBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      const footer = document.getElementById("site-footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If footer is entering viewport
      if (footerRect.top < windowHeight) {
        setOnDarkBg(true);
      } else {
        setOnDarkBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12
        rounded-full
        flex items-center justify-center
        shadow-xl
        transition-all duration-300
        hover:scale-110
        ${
          onDarkBg
            ? "bg-white text-[#1D427A]"
            : "bg-[#1D427A] text-white hover:bg-[#A6192E]"
        }
      `}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
