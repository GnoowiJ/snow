import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomeFloating } from "../component/Home/HomeMain.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export default function Root({ cartCount, refreshCartCount }) {
  return (
    <div>
      <ScrollToTop />
      <Header cartCount={cartCount} refreshCartCount={refreshCartCount} />
      <HomeFloating />
      <Outlet />
      <Footer />
    </div>
  );
}
