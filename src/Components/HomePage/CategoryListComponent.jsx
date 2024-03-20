import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mensClothingIcon from '../../../Icons/man-in-suit-and-tie-svgrepo-com.svg';
import womensClothingIcon from '../../../Icons/women-dress-svgrepo-com.svg';
import electronicsIcon from '../../../Icons/laptop-alt-1-svgrepo-com.svg';
import jewelryIcon from '../../../Icons/jewelry-svgrepo-com.svg';
import downIcon from '../../../Icons/down-arrow-icon-dark-bg.png';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

function CategoryListComponent() {
  // <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src="holder.js/100px180" />
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the
  //       bulk of the card's content.
  //     </Card.Text>
  //     <Button variant="primary">Go somewhere</Button>
  //   </Card.Body>
  // </Card>

  return (
    <>
      {/* <div className="down-btn-container">

      <a id="link" href="#down-btn-element-target" className='down-arrow'>
       <img src={downIcon}></img>
      </a>

       </div> */}

      <div className="category-main-title-component">
        <h3 className="category-header-text-styles">Categories</h3>
      </div>

      <div className="categories-wrapper">
        <div className="category-card-container-mens-and-womens-clothes">
          <Card style={{ width: '18rem', border: '2px solid black' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className="category-card-style-container-mens">
              {/* <Card.Title>Mens Clothing</Card.Title> */}
              <h6>Mens Clothing</h6>
              <Card.Text></Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <div className="mens-clothing-icon-container">
                <img src={mensClothingIcon}></img>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', border: '2px solid black' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className="category-card-style-container-womens">
              {/* <Card.Title>Mens Clothing</Card.Title> */}
              <h6>Womens Clothing</h6>
              <Card.Text></Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <div className="womens-clothing-icon-container">
                <img src={womensClothingIcon}></img>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="category-card-electronics-jewelry-container">
          <Card style={{ width: '18rem', border: '2px solid black' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className="category-card-style-container-electronics">
              {/* <Card.Title>Mens Clothing</Card.Title> */}
              <h6>Electronics</h6>
              <Card.Text></Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <div className="electronics-icon-container">
                <img src={electronicsIcon}></img>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', border: '2px solid black' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className="category-card-style-container-jewelery">
              {/* <Card.Title>Mens Clothing</Card.Title> */}
              <h6>Jewelry</h6>
              <Card.Text></Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <div className="jewelery-icon-container">
                <img src={jewelryIcon}></img>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default CategoryListComponent;
