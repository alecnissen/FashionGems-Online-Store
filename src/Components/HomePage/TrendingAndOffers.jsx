import React from 'react';
import earringImageSpecialOffers from '../../../Images/earring-img-special-offers.png';
import earringImageNewArrivals from '../../../Images/img4.png';
import Timer from './Timer';
import Card from 'react-bootstrap/Card';
import diamondNecklace from '../../../Images/trending-offers-diamond-necklace.jpg';
import ringImg from '../../../Images/ring-img-trending-items.png';
import chicBraclet from '../../../Images/chic-braclet-img.png';
import goldenNecklace from '../../../Images/golden-necklace-card-img.png';
import greenNecklace from '../../../Images/green-diamond-necklace.png';
import luxuriousGoldImg from '../../../Images/luxurious-gold-img.png';
import jewelryCollection from '../../../Images/img5.png';
import goldenEarrings from '../../../Images/img7.png';
import braceletImg from '../../../Images/bracelet-img.png';
import heartIconTransparentImg from '../../../Images/heart-icon-transparent-bg.png';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

export default function TrendingAndOffers() {
  return (
    <div className="trending-offers-component-wrapper">
      <div className="special-offers-content-wrapper">
        <div className="special-offers-header-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="special-offers-header-gem-icon"
            viewBox="0 0 16 16"
          >
            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
          </svg>
          <h3>Special Offers</h3>
        </div>

        <div className="special-offers-card-wrapper" id="down-btn-element-target">
          <div className="earrings-card-container">
            <div className="earrings-title-container">
              <h3>Earrings</h3>
              <p>By</p>
            </div>

            <div className="img-container-earrings">
              <img src={earringImageSpecialOffers} className="earring-img-styles"></img>
            </div>

            <div className="earrings-card-discount-div">
              <p>50% Off!</p>
            </div>

            <Link to="/ShoppingComponent">
              <button>Shop Now</button>
            </Link>
          </div>

          <div className="new-arrivals-card-container">
            <div className="new-arrivals-title-container">
              <h3>New Arrivals</h3>
              <p>Discover our latest</p>
            </div>

            <img src={earringImageNewArrivals} className="new-arrivals-img-styles"></img>

            <div className="new-arrivals-discount-circle">
              <p>35% Off!</p>
            </div>

            <Link to="/ShoppingComponent">
              <button>Shop Now</button>
            </Link>
          </div>

          <div className="special-offers-timer-countdown-container">
            <div className="special-offers-title-text">
              <h3>Special Offers</h3>
              <p>Ending Soon</p>

              <Timer duration={60 * 60 * 1000}></Timer>
            </div>
          </div>
        </div>
      </div>

      <div className="trending-offers-container">
        <div className="trending-offers-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="trending-offers-header-gem-icon"
            viewBox="0 0 16 16"
          >
            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
          </svg>
          <h3>Trending Offers</h3>
        </div>

        <div className="card-container-trending-offers-set-1">
          <Card style={{ width: '18rem', backgroundColor: 'rgb(58, 53, 53)', color: 'white' }} id="trending-card-1">
            <Card.Img variant="top" src={diamondNecklace} id="elegant-necklace-styles" />
            <Card.Body>
              <Card.Title className="card-1-title-styles">Elegant Necklace</Card.Title>

              <Card.Text className="card-1-price-display">$19.99</Card.Text>
              <img src={heartIconTransparentImg}></img>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', backgroundColor: 'rgb(58, 53, 53)', color: 'white' }} id="trending-card-2">
            <Card.Img variant="top" src={ringImg} id="stunning-ring-styles" />
            <Card.Body>
              <Card.Title className="card-2-title-styles">Stunning Ring</Card.Title>
              <Card.Text className="card-2-price-display">$49.99</Card.Text>
              <img src={heartIconTransparentImg}></img>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', backgroundColor: 'rgb(58, 53, 53)', color: 'white' }} id="trending-card-3">
            <Card.Img variant="top" src={chicBraclet} />
            <Card.Body>
              <Card.Title className="card-3-title-styles">Chic Braclet</Card.Title>
              <Card.Text className="card-3-price-display">$39.99</Card.Text>
              <img src={heartIconTransparentImg}></img>
            </Card.Body>
          </Card>
        </div>

        <div className="card-container-trending-offers-set2">
          <Card style={{ width: '18rem', backgroundColor: 'rgb(58, 53, 53)', color: 'white' }} id="trending-card-4">
            <Card.Img variant="top" src={goldenNecklace} />
            <Card.Body>
              <Card.Title className="card-4-title-styles">Elegant Jewelry</Card.Title>
              <Card.Text className="card-4-price-display">$120.00</Card.Text>
              <img src={heartIconTransparentImg}></img>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', backgroundColor: 'rgb(58, 53, 53)', color: 'white' }} id="trending-card-5">
            <Card.Img variant="top" src={greenNecklace} id="sparkling-gemstone-styles" />
            <Card.Body>
              <Card.Title className="card-5-title-styles">Sparkling Gemstone</Card.Title>
              <Card.Text className="card-5-price-display">$300.00</Card.Text>
              <img src={heartIconTransparentImg}></img>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', backgroundColor: 'rgb(58, 53, 53)', color: 'white' }} id="trending-card-6">
            <Card.Img variant="top" src={luxuriousGoldImg} id="luxarious-gold-styles" />
            <Card.Body>
              <Card.Title className="card-6-title-styles">Luxurious Gold</Card.Title>
              <Card.Text className="card-6-price-display">$500.00</Card.Text>
              <img src={heartIconTransparentImg}></img>
            </Card.Body>
          </Card>
        </div>

        <div className="trending-categories-container">
          <div className="trending-categories-header-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="trending-categories-header-icon"
              viewBox="0 0 16 16"
            >
              <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
            </svg>

            <h3 className="trending-categories-header">Trending Categories</h3>
          </div>

          <div className="card-container-trending-categories">
            <Card className="trending-categories-card-1-styles">
              {/* <Card.Title className='jewelry-header-styles-trending-category-card-1'>Jewelry</Card.Title> */}
              <Card.Img variant="top" src={jewelryCollection} className="trending-categories-card-img-1" />
              <div className="trending-categories-text-over-cards">
                Jewelry
                <br></br>
                <Link to="/ShoppingComponent">
                  <button>Shop Now</button>
                </Link>
              </div>
            </Card>

            <Card className="trending-categories-card-2-styles">
              <Card.Img variant="top" src={goldenEarrings} className="trending-categories-card-img-2" />
              <div className="trending-categories-text-over-cards-card2">
                Earrings
                <br></br>
                <Link to="/ShoppingComponent">
                  <button>Shop Now</button>
                </Link>
              </div>
            </Card>

            <Card className="trending-categories-card-3-styles">
              <Card.Img variant="top" src={braceletImg} className="trending-categories-card-img-3" />

              <div className="trending-categories-text-over-cards-card3">
                Bracelets
                <br></br>
                <Link to="/ShoppingComponent">
                  <button>Shop Now</button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
