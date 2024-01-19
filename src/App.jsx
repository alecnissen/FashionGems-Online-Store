import './App.css';
import react from 'react';
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import ShoppingComponent from './ShoppingComponent';
import NotFound from './NotFound';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage';
import About from './About';
import CheckoutComponent from './CheckoutComponent';
import Modal from './SearchModal';
import ImageCarouselComponent from './ImageCarouselComponent';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([]);
  const storedItems = JSON.parse(localStorage.getItem('items'));
  const [localStorageItems, setLocalStorageItems] = useState(storedItems || []);
  const [category, setCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // pass these to header component as props

  useEffect(() => {
    if (cartItems !== null) {
      localStorage.setItem('items', JSON.stringify(cartItems));
      setLocalStorageItems(cartItems);
    }
  }, [cartItems]);

  useEffect(() => {
    if (storedItems !== null) {
      setCartItems(storedItems);
    }
  }, []);

  console.log(storedItems);

  // const newCartItems = cartItems.length;

  const numberOfCartItems = cartItems.length;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></HomePage>}
        ></Route>

        <Route
          path="/ShoppingComponent"
          element={
            <ShoppingComponent
              cartItems={cartItems}
              setCartItems={setCartItems}
              numberOfCartItems={numberOfCartItems}
              itemQuantity={itemQuantity}
              setItemQuantity={setItemQuantity}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              category={category}
              setCategory={setCategory}
            ></ShoppingComponent>
          }
        ></Route>
        <Route
          path="/ProductPage/:id"
          element={
            <ProductPage
              numberOfCartItems={numberOfCartItems}
              setCartItems={setCartItems}
              cartItems={cartItems}
              itemQuantity={itemQuantity}
              setItemQuantity={setItemQuantity}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            ></ProductPage>
          }
        ></Route>
        <Route
          path="/About"
          element={<About numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></About>}
        ></Route>
        <Route
          path="/CheckoutComponent"
          element={
            <CheckoutComponent
              cartItems={cartItems}
              setCartItems={setCartItems}
              numberOfCartItems={numberOfCartItems}
              itemQuantity={itemQuantity}
              setItemQuantity={setItemQuantity}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            ></CheckoutComponent>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
