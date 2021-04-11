/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import images from 'images';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-white">
        <div className="container">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#home">Games</a>
              </li>
              <li>
                <a href="#news">Membership</a>
              </li>
              <li>
                <a href="#contact">Download</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#home">Contact Us</a>
              </li>
              <li>
                <a href="#news">Blog</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#home">FAQ</a>
              </li>
              <li>
                <a href="#news">Service Status</a>
              </li>
            </ul>

            <div className="follow-us">
              <span>Follow Us!</span>
              <ul>
                {[
                  'icon-facebook',
                  'icon-twitter',
                  'icon-instagram',
                  'icon-youtube',
                ].map(socialMediaIcon => (
                  <li>
                    <a href="#home">
                      <img
                        src={images[socialMediaIcon]}
                        alt={socialMediaIcon}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-language">
              Site Language
              <div className="language-dropdown">
                English
                <span className="language-arrow-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-black">
        <div className="container">
          <ul>
            <li>
              <a href="#home">Terms of Use</a>
            </li>
            <li>
              <a href="#news">Privacy Policy</a>
            </li>
            <li>
              <a href="#contact">Cookies</a>
            </li>
          </ul>

          <div className="rights">Tüm hakları saklıdır.</div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default memo(Footer);
