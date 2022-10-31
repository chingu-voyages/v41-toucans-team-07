import React from "react";
import "./Header.scss";
import header_img from "../../assets/hero-square.jpg";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={header_img} alt="" className="header-img" />
        <div className="title-container">
          <h1 className="title">The Black Pearl</h1>
          <h2 className="web-desc">
            A Page dedicated to Fan of Pirates of Caribbean Movie (A FanPage)
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
