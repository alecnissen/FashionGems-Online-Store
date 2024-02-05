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

import addToBagBtn from "../../../Images/product-page-add-to-bag.png"

import reviewStar from "../../../Images/review-star.png"

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

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // let count = 0;

  console.log(id);

  // console.log(selectedProduct);

  console.log(itemQuantity);

  console.log('typeof itemQuantity check', typeof itemQuantity);
  // console.log('array check for itemQuantity in product', Array.isArray(itemQuantity));

  useEffect(() => {
    ApiRequest(id).then((data) => {
      setSingleProductData(data);
    });

    // const getData = async () => {
    //   setLoading(true);
    //   try {
    //     // const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    //     // console.log(response.data);

    //     // apiRequest(id).then((data) => {
    //     //   setSingleProductData(data);
    //     // });

    //     // setSingleProductData(response.data);
    //   }

    //   catch (error) {
    //     console.log(error);
    //     if (error.response) {
    //       // The request was made and the server responded with a status code
    //       // that falls out of the range of 2xx
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //       setError('Server responded with ' + ' ' + error.response.status + ' ' + 'error');
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //       // http.ClientRequest in node.js
    //       console.log(error.request);
    //       setError(error.request);
    //     } else {
    //       // Something happened in setting up the request that triggered an Error
    //       console.log('Error', error.message);
    //       setError(error.message);
    //     }
    //     console.log(error.config);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // getData();
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

    // console.log(itemQuantity);

    setCartItems([...cartItems, newItem]);

    console.log(newItem);

    console.log(cartItems);
  }

  function changeQuantityIncrement(count) {
    console.log(singleProductData.quantity);

    console.log(count);

    setItemQuantity(count);

    console.log(itemQuantity);

    // console.log('item after incrementing', data);
  }

  function changeQuantityDecrement(count) {
    setItemQuantity(count);
  }

  console.log('typeof itemQuantity check in product component, before return', typeof itemQuantity);
  console.log('array check for itemQuantity in product', Array.isArray(itemQuantity));

  return (
    <>
      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>



    <div className='product-page-wrapper'> 
    

      <div className='product-page-image-container'> 
        <img src={singleProductData.image}></img>
      </div>


      <div className='product-page-description-add-btn-container'>

      <div className='product-page-product-description-title-container'> 
        <h3>{singleProductData.title}</h3>


      <div className='product-page-review-container'> 
        <img src={reviewStar}></img>
        <img src={reviewStar}></img>
        <img src={reviewStar}></img>
        <img src={reviewStar}></img>
        <img src={reviewStar}></img>

        <br></br>

      
      </div>

        <div className='product-page-review-number-contaner'>
        <p>420 reviews</p>
        </div>

        <h5>{singleProductData.description}</h5>
        {/* <h5>${singleProductData.price}</h5> */}
      </div>


    <div className='product-page-item-quantity-container'> 
    <div className='product-page-btn-container'>

    


      <button onClick={(e) => {
        count -= 1;
        changeQuantityDecrement(count);
      }}>-</button>

      <div>
      {count}
      </div>


      <button onClick={(e) => {
        count += 1;
        changeQuantityIncrement(count);
      }}>+</button>
      </div>


      <div className='product-price-container'>
    <h5>${singleProductData.price}</h5>
      </div>
    </div>


    <div className='product-page-add-to-cart-btn-container'> 
    
    <button onClick={(e) => {
        changeAmount(singleProductData, itemQuantity);
        count = 0;
      }}>Add to Cart</button>
      
    </div>


    </div>


    </div>








{/* 
      {!error && (
        <div className="product-page-item-container" key={singleProductData.id}>
          <Card style={{ width: '18rem' }}>
            <h4>{singleProductData.title}</h4>
            <Card.Img
              variant="top"
              src={singleProductData.image}
              style={{ width: '10em' }}
              className="shopping-component-card-img"
            />
            <Card.Body>
              <Card.Title>{singleProductData.title}</Card.Title>
              <Card.Text>{singleProductData.description}</Card.Text>
              <p>Select Quanity</p>
              <button
                onClick={(e) => {
                  count += 1;
                  changeQuantityIncrement(count);
                }}
              >
                +
              </button>
              <input
                type="number"
                min="0"
                max="10"
                value={count}
                onChange={(e) => {
                  
                }}
              ></input>

              <button
                onClick={(e) => {
                  count -= 1;
                  changeQuantityDecrement(count);
                }}
              >
                -
              </button>

              <p>${singleProductData.price}</p>
              <Button
                variant="primary"
                onClick={(e) => {
                  changeAmount(singleProductData, itemQuantity);
                  count = 0;
                }}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      )} */}

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
