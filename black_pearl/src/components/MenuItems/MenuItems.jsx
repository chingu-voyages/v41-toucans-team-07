import React from 'react';
import './menuitems.scss';

const MenuItems = ({ title, desc, img }) => {
  return (
    <div className="menu-items">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      />
      {/* <div className="content">
        <h3 className="title">{title}</h3>
      </div> */}
    </div>
  );
};

export default MenuItems;
