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

function FooterAndBlog() {
  return (
    <div className='footer-blog-content-wrapper'>
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


    <Card style={{ width: '25rem', backgroundColor: 'black', color: 'white'}}>
    <Card.Img src={footerCardImg1}></Card.Img>
    <Card.Body> 
        <Card.Title style={{ fontWeight: 'bolder'}} className='card-1-header-styles'>5 Fashion Tips For a Stylish Look</Card.Title>
        <Card.Text>Get our fashion tips so you can look and feel your best!</Card.Text>
        <Card.Text>
        <img src={fashionGemsIcon} style={{padding:'5px'}}></img>
        Fashion Gems
        </Card.Text>
        {/* <img src={fashionGemsIcon}></img> */}
    </Card.Body>
    </Card> 




    <Card style={{ width: '25rem', backgroundColor: 'black', color: 'white'}}>
    <Card.Img src={footerCardImg2}></Card.Img>
    <Card.Body> 
        <Card.Title style={{ fontWeight: 'bolder'}}>Latest Trends in Fashion</Card.Title>
        <Card.Text>Discover the latest fashion trends here! Determine what is currently in style!</Card.Text>
        <Card.Text>
        <img src={fashionGemsIcon} style={{padding:'5px'}}></img>
        Fashion Gems
        </Card.Text>
    </Card.Body>
    </Card>




    <Card style={{ width: '25rem', backgroundColor: 'black', color: 'white'}}>
    <Card.Img src={footerCardImg3}></Card.Img>
    <Card.Body> 
        <Card.Title style={{ fontWeight: 'bolder'}}>Our Top Picks for this Spring</Card.Title>
        <Card.Text>With warmer weather fast approaching, learn about the top looks for spring! </Card.Text>
        <Card.Text>
        <img src={fashionGemsIcon} style={{padding:'5px'}}></img>
        Fashion Gems
        </Card.Text>
    </Card.Body>
    </Card>


    </div>


    <div className='footer-container'> 
        <h6>FashionGems</h6>
        <p>Shine like a diamond!</p>

        <div className='social-media-container-footer-container'> 
        <img src={instaLogo}></img>
        <img src={fbLogo}></img>
        <img src={twitterLogo}></img>
        </div>

    </div>


    </div>
  )
}

export default FooterAndBlog
