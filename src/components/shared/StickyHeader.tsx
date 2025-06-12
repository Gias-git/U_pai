"use client";
import { useEffect, useRef } from "react";
import Header from "./Header";
import CategoryNavbar from "./CategoryNavbar";

const StickyHeader = () => {
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const categoryNavbar = document.getElementById("category-navbar");

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (!categoryNavbar) return;

      if (scrollTop > lastScrollTop.current && scrollTop > 100) {
        // Scroll down – hide
        categoryNavbar.style.transform = "translateY(-100%)";
      } else {
        // Scroll up – show
        categoryNavbar.style.transform = "translateY(0)";
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow  transition-transform duration-300">
      <Header />
      <CategoryNavbar />
    </div>
  );
};

export default StickyHeader;
