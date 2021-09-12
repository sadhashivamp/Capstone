import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { h4 } from 'react-router-dom';

 function SocialMedia() {
  return (
    <div class="footer-container">
      
    <div className="row">
        
        <div className="footer-colomn">
          <h4>About us</h4>
          <ul className="footer-sub-text">
              <li><a href="#2">about us</a></li>
              <li><a href="#2">our services</a></li>
              <li><a href="#2">privacy policy</a></li>
              <li><a href="#2">affiliate program</a></li>
            </ul>
        </div>
        <div className="footer-colomn">
          <h4>Contact Us</h4>
          <ul className="footer-sub-text">
              <li><a href="#3">Contact</a></li>
              <li><a href="#3">Support</a></li>
              <li><a href="#3">Destination</a></li>
              <li><a href="#3">Sponsorships</a></li>
            </ul>
        </div>
        <div className="footer-colomn">
          <h4>FAQ'S</h4>
          <ul className="footer-sub-text">
              <li><a href="#4">xxxxx</a></li>
              <li><a href="#4">xxxxxxx</a></li>
              <li><a href="#4">xxxxx</a></li>
              <li><a href="#4">xxxxxxx</a></li>
            </ul>
        </div>
        <div className="footer-colomn">
          <h4>Follow Us</h4>
          <div className="social-links">
              <li><a href="https://www.youtube.com/">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
              </li>
              <li><a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
              </li>
              <li><a href="https://twitter.com/">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
              </li>
              <li><a href="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
              </li>
            </div>
        </div>
    </div>
    </div>
  );
}
export default SocialMedia