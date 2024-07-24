import emailIcon from '../../../Icons/email-icon-footer.png';

import gemIconTransparent from '../../../Images/gem-icon-transparent-background.png';
import phoneIconTransparent from '../../../Images/phone-icon-transparent.png';
import instagramIcon from '../../../Images/ig-image-transparent.png';
import fbIcon from '../../../Images/fb-image-transparent.png';
import twitterIcon from '../../../Images/twitter-logo-transparent.png';

export default function Footer() {
  return (
    <>
      <div className="footer-blog-content-wrapper">
        <div className="footer-header-container"></div>

        <div className="footer-card-container"></div>

        <div className="bottom-footer-content-container">
          <div className="footer-social-media-container">
            <div className="fashion-gems-title-icon-container">
              <img src={gemIconTransparent}></img>
              <h3>FashionGems</h3>
            </div>

            <p>Shine like a diamond!</p>

            <div className="social-media-container-footer-container">
              <img src={instagramIcon}></img>
              <img src={fbIcon}></img>
              <img src={twitterIcon}></img>
            </div>
          </div>

          <div className="footer-assistance-container">
            <p>Need assistance?</p>
            <h3>Our support team is available for you!</h3>

            <div className="phone-icon-container">
              <img src={phoneIconTransparent}></img>
              +31 045 456 3345
            </div>

            <div className="email-container">
              <img src={emailIcon}></img>
              fashiongems@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
