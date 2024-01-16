import './App.css'
import react from "react"
import Header from './Header'
import MainComponent from './MainComponent'
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import Footer from './Footer';
import ShoppingComponent from './ShoppingComponent';
import NotFound from './NotFound';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router-dom'
import ProductPage from './ProductPage';
import About from './About';
import CheckoutComponent from './CheckoutComponent';
import Modal from './Modal';


function App() { 

  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([]);
  const storedItems = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(storedItems || []);
  const [category, setCategory] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  // pass these to header component as props 

  

  useEffect(() => { 
      if (cartItems !== null) { 
          localStorage.setItem('items', JSON.stringify(cartItems));
          setItems(cartItems);
    }
  }, [cartItems]) 

  useEffect(() => {
    if (storedItems !== null) {
        setCartItems(storedItems);
    }
}, []);




  console.log(storedItems) 

  const newCartItems = cartItems.length; 

  return (
    <>

    <Routes> 
      <Route path='/' element={<HomePage newCartItems={newCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></HomePage>}></Route>

      <Route path='/ShoppingComponent' element={<ShoppingComponent cartItems={cartItems} setCartItems={setCartItems} newCartItems={newCartItems} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} isOpen={isOpen} setIsOpen={setIsOpen} category={category} setCategory={setCategory} ></ShoppingComponent>}></Route>
      <Route path='/ProductPage/:id' element={<ProductPage newCartItems={newCartItems} setCartItems={setCartItems} cartItems={cartItems} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} isOpen={isOpen} setIsOpen={setIsOpen} ></ProductPage>}></Route>
      <Route path='/About' element={<About newCartItems={newCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></About>}></Route>
      <Route path='/CheckoutComponent' element={<CheckoutComponent cartItems={cartItems} setCartItems={setCartItems} newCartItems={newCartItems} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} isOpen={isOpen} setIsOpen={setIsOpen}></CheckoutComponent>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  
    </>
  )
}

export default App
