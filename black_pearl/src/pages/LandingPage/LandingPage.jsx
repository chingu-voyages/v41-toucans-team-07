import React from "react";
import Header from "../../components/Header/Header";
import Sotd from "../../components/Sotd/Sotd";
import MovieSection from "../../components/Movie/MovieSection";
import "./landingpage.scss";

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <MovieSection />
      <Sotd /> {/* SOTD = Ship of The Day */}
    </div>
  );
};

export default LandingPage;
