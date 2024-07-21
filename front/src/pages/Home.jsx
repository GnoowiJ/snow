import React from "react";
import { Link } from "react-router-dom";
import { HomeBanner, HomeBestseller, HomeBrand, HomeEvent, HomeFloating, HomeFlower, HomeNewproduct, HomeReview, HomeSubscript } 
from "../component/Home/HomeMain.jsx";



export default function Home() {
  return (
    <div className="home-comp">
      <HomeBanner />
      <HomeBrand />
      <HomeFlower />
      <HomeNewproduct />
      <HomeBestseller />
      <HomeEvent />
      <HomeSubscript />
      <HomeReview />
    </div>
  );
}
