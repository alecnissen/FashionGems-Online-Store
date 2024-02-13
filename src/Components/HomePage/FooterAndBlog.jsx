import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import footerCardImg1 from "../../../Images/footer-card-img-1.png"
import footerCardImg2 from "../../../Images/footer-card-img-2.png"
import footerCardImg3 from "../../../Images/footer-card-img-3.png"
import fashionGemsIcon from "../../../Icons/fashion-gems-icon-img.png"
import instaLogo from "../../../Icons/insta-logo-footer.png"
import fbLogo from "../../../Icons/footer-facebook-icon.png"
import twitterLogo from "../../../Icons/footer-icon-twitter.png"
import phoneIcon from "../../../Icons/phone-icon-footer.png"
import emailIcon from "../../../Icons/email-icon-footer.png"
import gemIconTransparent from "../../../Images/gem-icon-transparent-background.png"
import phoneIconTransparent from "../../../Images/phone-icon-transparent.png"
import instagramIcon from "../../../Images/ig-image-transparent.png"
import fbIcon from "../../../Images/fb-image-transparent.png"
import twitterIcon from "../../../Images/twitter-logo-transparent.png"

function FooterAndBlog() {
  return (
    <div className='footer-blog-content-wrapper' id='blog-btn-element-target'>
        <div className='footer-header-container'> 
            <h3>Read Our Blog</h3>
        </div>

    <div className='footer-card-container'> 
    
{/* 
    <Card style={{ width: '18rem', backgroundColor: 'rgb(58, 53, 53)', color: 'white'}}>
      <Card.Img variant="top" src={diamondNecklace} />
      <Card.Body>
        <Card.Title className='card-1-title-styles'>Elegant Necklace</Card.Title>
        <Card.Text className='card-1-price-display'> 
            $19.99
        </Card.Text>
        <img src={heartIcon}></img>
      </Card.Body>
    </Card> */}


    <Card className="footer-card-1">
    <Card.Img src={footerCardImg1}></Card.Img>
    <Card.Body style={{backgroundColor: 'black', color: 'white'}}> 
        <Card.Title className='card-1-header-styles'>5 Fashion Tips For a Stylish Look</Card.Title>
        <Card.Text>Get our fashion tips from our expert stylists so you can look and feel your best!</Card.Text>
        <Card.Text>
        <img src={gemIconTransparent}></img>
        Fashion Gems
        </Card.Text>
        {/* <img src={fashionGemsIcon}></img> */}
    </Card.Body>
    </Card> 




    <Card className="footer-card-2">
    <Card.Img src={footerCardImg2}></Card.Img>
    <Card.Body style={{backgroundColor: 'black', color: 'white'}}> 
        <Card.Title>Latest Trends in Fashion</Card.Title>
        <Card.Text>Discover the latest fashion trends here! Determine what is currently in style!</Card.Text>
        <Card.Text>
        <img src={gemIconTransparent}></img>
        Fashion Gems
        </Card.Text>
    </Card.Body>
    </Card>




    <Card className="footer-card-3">
    <Card.Img src={footerCardImg3}></Card.Img>
    <Card.Body style={{backgroundColor: 'black', color: 'white'}}> 
        <Card.Title style={{ fontWeight: 'bolder'}}>Our Top Picks for this Spring</Card.Title>
        <Card.Text>With warmer weather fast approaching, learn about the top looks for spring! </Card.Text>
        <Card.Text>
        <img src={gemIconTransparent}></img>
        Fashion Gems
        </Card.Text>
    </Card.Body>
    </Card>


    </div>


    <div className='bottom-footer-content-container'>






    <div className='footer-social-media-container'> 
        <div className='fashion-gems-title-icon-container'>
        <img src={gemIconTransparent}></img>
        <h3>FashionGems</h3>
        </div>

        <p>Shine like a diamond!</p>

        <div className='social-media-container-footer-container'> 
        <img src={instagramIcon}></img>
        <img src={fbIcon}></img>
        <img src={twitterIcon}></img>
        </div>
    </div>


    <div className='footer-assistance-container'> 
      <p>Need assistance?</p>
      <h3>Our support team is available for you!</h3>

      <div className='phone-icon-container'>
      <img src={phoneIconTransparent}></img>
      +31 045 456 3345

      </div>

      <div className='email-container'> 
      <img src={emailIcon}></img>
      fashiongems@gmail.com
      </div>

    </div>
    
    
    </div>


    </div>
  )
}

export default FooterAndBlog
