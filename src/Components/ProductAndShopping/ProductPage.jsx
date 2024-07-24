import react from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import { v4 as uuidv4 } from 'uuid';
import ApiRequest from '../../API-CALLS/ApiRequest';
import reviewStar from '../../../Images/review-star.png';

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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ApiRequest(id).then((data) => {
      setSingleProductData(data);
    });
  }, [id]);

  useEffect(() => {
    setItemQuantity(0);
  }, [id]);

  function changeAmount(singleProductData, itemQuantity) {
    const newItem = {
      id: uuidv4(),
      title: singleProductData.title,
      description: singleProductData.description,
      price: singleProductData.price,
      image: singleProductData.image,
      quantity: itemQuantity,
    };

    setCartItems([...cartItems, newItem]);
  }

  function changeQuantityIncrement() {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
  }

  function changeQuantityDecrement() {
    if (itemQuantity > 0) {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

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
          </div>

          <div className="product-page-item-quantity-container">
            <div className="product-page-btn-container">
              <button
                onClick={(e) => {
                  changeQuantityDecrement();
                }}
              >
                -
              </button>
              <div>{itemQuantity}</div>

              <button
                onClick={(e) => {
                  changeQuantityIncrement();
                }}
              >
                +
              </button>
            </div>

            <div className="product-price-container">
              {singleProductData.price !== undefined && <h5>${singleProductData.price.toFixed(2)}</h5>}
            </div>
          </div>

          <div className="product-page-add-to-cart-btn-container">
            <button
              onClick={(e) => {
                if (itemQuantity === 0) {
                  setShowError(true);
                  return;
                } else {
                  changeAmount(singleProductData, itemQuantity);
                  setItemQuantity(0);
                  setShowError(false);
                }
              }}
            >
              Add to Cart
            </button>
          </div>

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
