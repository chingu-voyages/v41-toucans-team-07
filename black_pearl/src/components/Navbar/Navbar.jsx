import React, { useState, useEffect, useRef } from 'react';
import { links } from './navbardata';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/hero-square.jpg';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="Black Pearl" />
          {/* <h2 className="logo">Black Pearl</h2> */}
          <button className="nav-toggle" onClick={toggleLinks}>
            {showLinks ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
