import react from 'react';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import ErrorComponent from '../LoadingAndError/ErrorComponent';
import LoadingComponent from '../LoadingAndError/LoadingComponent';
import ApiRequest from '../../API-CALLS/ApiRequest';
import necklaceImgHeader from '../../../Images/necklace-img-shopping-component-header.png';

export default function ShoppingComponent({
  cartItems,
  setCartItems,
  numberOfCartItems,
  itemQuantity,
  isOpen,
  setIsOpen,
  error,
  loading,
}) {
  const [productData, setProductData] = useState([]);

  const [sortedData, setSortedData] = useState(productData);

  const getInitialState = () => {
    const value = 'All Products';
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  console.log(itemQuantity);

  useEffect(() => {
    ApiRequest().then((data) => {
      console.log('LOGGING DATA FROM API CALL WITHIN apiRequest file', data);
      setProductData(data);
    });
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
      return setSortedData([...productData].sort((a, b) => b.price - a.price));
    } else if (value === 'Price: Low to High') {
      return setSortedData([...productData].sort((a, b) => a.price - b.price));
    } else {
      setSortedData(productData);
    }
  }, [value, productData]);

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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>

      <div className="shopping-component-product-wrapper">
        <div className="shopping-component-header-img-container">
          <h1>Our Collection</h1>
          <br></br>
          <img src={necklaceImgHeader}></img>
        </div>

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
                <Card className="shopping-component-card-styles">
                  <Link to={`/ProductPage/${item.id}`} className="shopping-component-product-img-container">
                    <img src={item.image} className="shopping-component-card-img"></img>
                  </Link>
                  <Card.Body className="shopping-component-card-styles-card-body">
                    <Card.Title className="shopping-component-card-styles-title">{item.title}</Card.Title>
                    <p className="shopping-component-card-styles-price">${item.price.toFixed(2)}</p>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
