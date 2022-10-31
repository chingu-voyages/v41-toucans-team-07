import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayouts from './constants/SharedLayouts';
import Movie from './pages/Movie/Movie';
import About from './pages/About/About';
import Charcter from './pages/Character/Character';
import Art from './pages/Art/Art';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<LandingPage />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/art" element={<Art />} />
          <Route path="/about" element={<About />} />
          <Route path="/character" element={<Charcter />} />
          <Route path="*" element={<Error />} /> {/* <Header /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
