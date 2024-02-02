import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import footerCardImg1 from "../../../Images/footer-card-img-1.png"
import footerCardImg2 from "../../../Images/footer-card-img-2.png"
import footerCardImg3 from "../../../Images/footer-card-img-3.png"
import fashionGemsIcon from "../../../Icons/fashion-gems-icon-img.png"

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
        <Card.Title>5 Fashion Tips For a Stylish Look</Card.Title>
        <Card.Text>Get our fashion tips so you can look and feel your best!</Card.Text>
        <Card.Text>
        <img src={fashionGemsIcon}></img>
        Fashion Gems
        </Card.Text>
        {/* <img src={fashionGemsIcon}></img> */}
    </Card.Body>
    </Card> 

    <Card style={{ width: '25rem', backgroundColor: 'black', color: 'white'}}>
    <Card.Img src={footerCardImg2}></Card.Img>
    <Card.Body> 
        <Card.Title>Latest Trends in Fashion</Card.Title>
    </Card.Body>
    </Card>

    <Card style={{ width: '25rem', backgroundColor: 'black', color: 'white'}}>
    <Card.Img src={footerCardImg3}></Card.Img>
    <Card.Body> 
        <Card.Title>Our Top Picks for Spring</Card.Title>
    </Card.Body>
    </Card>


    </div>

    </div>
  )
}

export default FooterAndBlog
