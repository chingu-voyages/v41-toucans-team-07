import React from 'react';
import './menuitems.scss';

const MenuItems = ({ title, desc, img }) => {
  return (
    <div className="menu-items">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      />
    </div>
  );
};

export default MenuItems;
