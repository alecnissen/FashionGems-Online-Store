import React from 'react';
import Card from 'react-bootstrap/Card';
import mensClothingIcon from '../../../Icons/man-in-suit-and-tie-svgrepo-com.svg';
import womensClothingIcon from '../../../Icons/women-dress-svgrepo-com.svg';
import electronicsIcon from '../../../Icons/laptop-alt-1-svgrepo-com.svg';
import jewelryIcon from '../../../Icons/jewelry-svgrepo-com.svg';

function CategoryListComponent() {
  return (
    <>
      <div className="category-main-title-component">
        <h3 className="category-header-text-styles">Categories</h3>
      </div>

      <div className="categories-wrapper">
        <div className="category-card-container-mens-and-womens-clothes">
          <Card style={{ width: '18rem', border: '2px solid black' }}>
            <Card.Body className="category-card-style-container-mens">
              <h6>Mens Clothing</h6>
              <Card.Text></Card.Text>
              <div className="mens-clothing-icon-container">
                <img src={mensClothingIcon}></img>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', border: '2px solid black' }}>
            <Card.Body className="category-card-style-container-womens">
              <h6>Womens Clothing</h6>
              <Card.Text></Card.Text>
              <div className="womens-clothing-icon-container">
                <img src={womensClothingIcon}></img>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="category-card-electronics-jewelry-container">
          <Card style={{ width: '18rem', border: '2px solid black' }}>
            <Card.Body className="category-card-style-container-electronics">
              <h6>Electronics</h6>
              <Card.Text></Card.Text>
              <div className="electronics-icon-container">
                <img src={electronicsIcon}></img>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', border: '2px solid black' }}>
            <Card.Body className="category-card-style-container-jewelery">
              <h6>Jewelry</h6>
              <Card.Text></Card.Text>
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
