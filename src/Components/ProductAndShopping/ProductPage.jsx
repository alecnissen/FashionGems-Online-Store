import react from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import ErrorComponent from '../LoadingAndError/ErrorComponent';
import LoadingComponent from '../LoadingAndError/LoadingComponent';

import PropTypes from 'prop-types';
// import apiRequest from '../../API-CALLS/ApiRequest';
import ApiRequest from '../../API-CALLS/ApiRequest';

import addToBagBtn from '../../../Images/product-page-add-to-bag.png';

import reviewStar from '../../../Images/review-star.png';
import ProductQuantityAlert from '../../ProductQuantityAlert';

let count = 0;

export default function ProductPage({
  cartItems,
  setCartItems,
  numberOfCartItems,
  itemQuantity,
  setItemQuantity,
  isOpen,
  setIsOpen,
}) {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState([]);
  const [showError, setShowError] = useState(false);

  console.log('logging singleProductData status, initial page load', singleProductData);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // let count = 0;

  console.log(id);

  console.log(itemQuantity);

  useEffect(() => {
    ApiRequest(id).then((data) => {
      setSingleProductData(data);
    });
  }, [id]);

  useEffect(() => {
    // Reset item quantity to 0 when navigating to another product page
    setItemQuantity(0);
  }, [id]);

  function changeAmount(singleProductData, itemQuantity) {
    const newItem = {
      title: singleProductData.title,
      description: singleProductData.description,
      price: singleProductData.price,
      image: singleProductData.image,
      quantity: itemQuantity,
    };

    console.log(singleProductData);

    setCartItems([...cartItems, newItem]);

    console.log(newItem);

    console.log(cartItems);
  }

  // function changeQuantityIncrement(count) {
  //   console.log(singleProductData.quantity);

  //   console.log(count);

  //   setItemQuantity(count);

  //   console.log(itemQuantity);

  // }

  function changeQuantityIncrement() {
    setItemQuantity(prevQuantity => prevQuantity + 1);
  }

  // function changeQuantityDecrement(count) {
  //   // setItemQuantity(count);
  //   if (count > 0) {
  //     setItemQuantity(count);
  //   }
  // }

  function changeQuantityDecrement() {
    if (itemQuantity > 0) {
      setItemQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  console.log('typeof itemQuantity check in product component, before return', typeof itemQuantity);
  console.log('array check for itemQuantity in product', Array.isArray(itemQuantity));

  return (
    <>
      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>

      <div className="product-page-wrapper">
        <div className="product-page-image-container">
          <img src={singleProductData.image}></img>
        </div>

        <div className="product-page-description-add-btn-container">
          <div className="product-page-product-description-title-container">
            <h3>{singleProductData.title}</h3>

            <div className="product-page-review-container">
              <img src={reviewStar}></img>
              <img src={reviewStar}></img>
              <img src={reviewStar}></img>
              <img src={reviewStar}></img>
              <img src={reviewStar}></img>

              <br></br>
            </div>

            <div className="product-page-review-number-contaner">
              <p>420 reviews</p>
            </div>

            <h5>{singleProductData.description}</h5>
            {/* <h5>${singleProductData.price}</h5> */}
          </div>

          <div className="product-page-item-quantity-container">
            <div className="product-page-btn-container">
              <button
                onClick={(e) => {

                  // if (count = 0) { 
                  //   return
                  // }

                  // count -= 1;
                  // changeQuantityDecrement(count);

                  changeQuantityDecrement();
                }}
              >
                -
              </button>

              {/* <div>{count}</div> */}
              <div>{itemQuantity}</div>

              <button
                onClick={(e) => {

                  // if (count = 0) { 
                  //   return
                  // }

                  // count += 1;
                  // changeQuantityIncrement(count);

                  changeQuantityIncrement();
                }}
              >
                +
              </button>
            </div>

            <div className="product-price-container">
              {/* <h5>${singleProductData.price}</h5> */}
              {singleProductData.price !== undefined && <h5>${singleProductData.price.toFixed(2)}</h5>}
            </div>
          </div>

          <div className="product-page-add-to-cart-btn-container">
            <button
              onClick={(e) => {


                if (itemQuantity === 0) { 
                  setShowError(true);
                  // alert('Please select a quantity greater than 0.')
                  return;
                } else { 

                 changeAmount(singleProductData, itemQuantity);
                setItemQuantity(0);
                setShowError(false);
                } 

                // itemQuantity => itemQuantity = 0;
                // count = 0;
              }}
            >
              Add to Cart
            </button>

            

          </div>


            {/* I want the component displayed here  */}

            {/* {itemQuantity === 0 && (
    <span style={{ color: 'red', textAlign: 'center', fontSize: '1.2rem' }}>Please select a quantity greater than 0.</span>
  )} */}

          {showError && itemQuantity === 0 && (
            <span style={{ color: 'red', textAlign: 'center', fontSize: '1.2rem' }}>
              Please select a quantity greater than 0.
            </span>
          )}



        </div>
      </div>


      <Footer></Footer>
    </>
  );
}

// console.log('typeof itemQuantity check in product component, after function', typeof itemQuantity);

ProductPage.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  numberOfCartItems: PropTypes.number,
  itemQuantity: PropTypes.array,
  setItemQuantity: PropTypes.func,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
