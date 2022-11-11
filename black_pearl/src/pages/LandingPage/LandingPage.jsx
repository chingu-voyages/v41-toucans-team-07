import React from 'react';
import Header from '../../components/Header/Header';
import Sotd from '../../components/Sotd/Sotd';
import MovieSection from '../../components/Movie/MovieSection';
import './landingpage.scss';
import Events from '../../components/Events/Events';

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Events />
      <MovieSection />
      <Sotd /> SOTD = Ship of The Day
    </div>
  );
};

export default LandingPage;
