import React from 'react';
import blackCard from '../../../Images/card-for-fashion-gem-app-section.png';
import appleIcon from '../../../Images/apple-icon.png';
import womenWithHandBag from '../../../Images/women-with-handbag.png';
import googlePlayIcon from '../../../Images/google-play-icon.png';
import fashionGemsIcon from '../../../Icons/fashion-gems-icon-img.png';

import fashionGemsIcon2 from '../../../Images/Icon gem.png';
import googlePlayIcon2 from "../../../Images/Icon google play.png"



export default function FashionGemsAppComponent() {
  return (
    <div className="fashion-gems-app-wrapper">
      <div className="download-app-and-icons-container">
        <h3>Download the FashionGems App and Shop Anywhere!</h3>
        <h5>The app is now available in various stores supporting all devices!</h5>

        <div className="app-card-container">
          <div className="apple-icon-and-description-container">
            <img src={appleIcon}></img>

            <div className="download-from-app-store-container">
              <p>Download from:</p>
              <h6>App Store</h6>
            </div>
          </div>

          <div className="download-google-play-container">
            <img src={googlePlayIcon2}></img>
            <div className="download-from-google-play-container">
              <p>Download from:</p>
              <h6>Google Play</h6>
            </div>
          </div>

          <div className="download-from-fashion-gems-container">
            <img src={fashionGemsIcon2}></img>

            <div className="download-from-fashion-gems-text-content-container">
              <p>Download from:</p>
              <h6>FashionGems</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="women-with-handbag-container">
        <img src={womenWithHandBag}></img>
      </div>
    </div>
  );
}
