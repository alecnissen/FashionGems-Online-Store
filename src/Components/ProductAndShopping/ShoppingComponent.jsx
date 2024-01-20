import react from 'react';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
// import Checkout from "./CheckoutComponent"
import CheckoutComponent from './CheckoutComponent';
import PropTypes from 'prop-types';

import Select from 'react-select';

import ErrorComponent from '../../ErrorComponent';
import LoadingComponent from '../../LoadingComponent';

export default function ShoppingComponent({
  cartItems,
  setCartItems,
  numberOfCartItems,
  itemQuantity,
  setItemQuantity,
  isOpen,
  setIsOpen,
  category,
  setCategory,
}) {
  console.log('typeof itemQuantity from shopping component', typeof itemQuantity);
  // console.log('array check for itemQuantity in shopping', Array.isArray(itemQuantity));

  const [productData, setProductData] = useState([]);

  const [sortedData, setSortedData] = useState(productData);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const getInitialState = () => {
    const value = 'All Products';
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  console.log(itemQuantity);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        setProductData(response.data);
      } catch (error) {
        console.log(error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setError('Server responded with ' + ' ' + error.response.status + ' ' + 'error');
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          setError(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          setError(error.message);
        }
        console.log(error.config);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (value === "Men's Clothing") {
      setSortedData(
        productData.filter((item) => {
          return item.category === "men's clothing";
        }),
      );
    } else if (value === "Women's Clothing") {
      setSortedData(
        productData.filter((item) => {
          return item.category === "women's clothing";
        }),
      );
    } else if (value === 'Electronics') {
      setSortedData(
        productData.filter((item) => {
          return item.category === 'electronics';
        }),
      );
    } else if (value === 'Jewelery') {
      setSortedData(
        productData.filter((item) => {
          return item.category === 'jewelery';
        }),
      );
    } else if (value === 'Price: High to Low') {
      // const sortedProducts = data.sort((a, b) => a.price - b.price);
      // setSortedData(sortedProducts);
      return setSortedData([...productData].sort((a, b) => b.price - a.price));
    } else if (value === 'Price: Low to High') {
      return setSortedData([...productData].sort((a, b) => a.price - b.price));
    } else {
      setSortedData(productData);
    }
  }, [value, productData]);

  // useEffect(() => {
  //   if (value === "Price: High to Low") {
  //     setSortedData((prevData) => [...prevData].sort((a, b) => b.price - a.price));
  //   } else if (value === "Price: Low to High") {
  //     setSortedData((prevData) => [...prevData].sort((a, b) => a.price - b.price));
  //   }
  // }, [value]);

  function changeAmount(item, itemQuantity) {
    const newItem = {
      title: item.title,
      description: item.description,
      price: item.price,
      quantity: itemQuantity,
      image: item.image,
    };

    setCartItems([...cartItems, newItem]);

    console.log(cartItems);
  }

  productData.map((item) => {
    console.log(item.category);
  });

  // const getInitialState = () => {
  //   const value = "Mens Clothing"
  //   return value;
  // };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log('logging category state value', value);

  console.log('typeof itemQuantity check in shopping component, before return', typeof itemQuantity);

  console.log('array check for itemQuantity in product', Array.isArray(itemQuantity));

  return (
    <>
      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
      <h1 className="shopping-component-header-text">Our Collection</h1>

      <div className="sort-by-div">
        Sort By:
        <select value={value} onChange={handleChange}>
          <option value={'All Products'}>All Products</option>
          <option value={"Men's Clothing"}>Mens Clothing</option>
          <option value={"Women's Clothing"}>Womens clothing</option>
          <option value={'Electronics'}>Electronics</option>
          <option value={'Jewelery'}>Jewelery</option>
          <option value={'Price: High to Low'}>Price: High to Low</option>
          <option value={'Price: Low to High'}>Price: Low to High</option>
        </select>
      </div>

      {error && <ErrorComponent error={error}></ErrorComponent>}
      {loading && <LoadingComponent></LoadingComponent>}

      <div className="shopping-component-products-container">
        {sortedData.map((item) => {
          return (
            <div className="shopping-component-card-container" key={item.id}>
              <Card
                style={{ width: '18rem' }}
                onClick={(e) => {
                  // console.log(item);
                }}
              >
                <Link to={`/ProductPage/${item.id}`}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ width: '10em' }}
                    className="shopping-component-card-img"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <p>Select Quanity</p>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    placeholder="0"
                    onChange={(e) => {
                      setItemQuantity(e.target.value);
                      console.log(itemQuantity);
                    }}
                  ></input>
                  <p>${item.price}</p>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      changeAmount(item, itemQuantity);
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      <Footer></Footer>
    </>
  );
}

// console.log('typeof itemQuantity check in shopping component, after function', typeof itemQuantity);

ShoppingComponent.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  numberOfCartItems: PropTypes.number,
  itemQuantity: PropTypes.array,
  setItemQuantity: PropTypes.func,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  category: PropTypes.string,
  setCategory: PropTypes.func,
};

// ShoppingComponent.propTypes = {
//   cartItems: PropTypes.array,
//   // setCartItems: PropTypes.array,
//   newCartItems: PropTypes.number,
//   itemQuantity: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.number]))
//   // setItemQuantity: PropTypes.array,
// }
