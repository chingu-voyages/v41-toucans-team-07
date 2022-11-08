import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import PirateMusic from '../components/Music/PirateMusic';
const SharedLayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <PirateMusic />
    </>
  );
};

export default SharedLayouts;
