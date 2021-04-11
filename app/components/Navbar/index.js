/* eslint-disable react/no-unescaped-entities */
/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import images from 'images';

function Navbar() {
  return (
    <nav>
      <div className="bg-header container">
        <a href="#logo">
          <img className="navbar-logo" src={images.logo} alt="logo" />
        </a>

        <ul>
          <li className="active">
            <a href="#home">Games</a>
            <div className="arrow-up" />
          </li>
          <li>
            <a href="#news">Membership</a>
          </li>
          <li>
            <a href="#contact">Download</a>
          </li>
          <li>
            <a href="#about">Blog</a>
          </li>
          <li>
            <a href="#about">Support</a>
          </li>
        </ul>

        <button type="button" className="btn-primary" href="#logo">
          LET'S PLAY
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default memo(Navbar);
