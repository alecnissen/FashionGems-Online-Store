// import './App.css';
import './Styles/App.css';
import { useEffect, useState } from 'react';
import ShoppingComponent from './Components/ProductAndShopping/ShoppingComponent';
import NotFound from './Components/LoadingAndError/NotFound';
import HomePage from './Components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './Components/ProductAndShopping/ProductPage';
import About from './Components/HomePage/About';
import CheckoutComponent from './Components/ProductAndShopping/CheckoutComponent';
import './Styles/index.scss';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const storedItems = JSON.parse(localStorage.getItem('items'));
  const [localStorageItems, setLocalStorageItems] = useState(storedItems || []);
  const [category, setCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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
