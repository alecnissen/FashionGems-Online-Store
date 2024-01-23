import react from 'react';
import Button from 'react-bootstrap/Button';
// import searchIcon from '../Icons/search-svgrepo-com.svg';
// import cartIcon from '../Icons/cart-shopping-svgrepo-com.svg';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingComponent from '../ProductAndShopping/ShoppingComponent';
import Modal from '../ProductAndShopping/SearchModal';

export default function Header({ numberOfCartItems, isOpen, setIsOpen }) {
  // console.log(typeof newCartCount);
  // console.log(typeof newItemQuantity);

  return (
    <>
      <div className="header-style-container">
        <div className='search-bar-cart-items-icons'>

      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" onClick={() => {
              console.log('modal test');
              setIsOpen(true);
            }} >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>

      </svg>

           <Link to="/CheckoutComponent">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
  
</svg>
</Link>    

<div className="badge-icon-for-shopping-cart">{numberOfCartItems}</div>

    </div> 

        <div className='flex-container-h1'>
        <h1>Shopping Cart</h1>
        </div>

        <nav className="header-button-styles-container">
        <br></br>

          <Button variant="primary" className='home-btn-styles'>
            <Link to="/" className='home-link-styles'>Home</Link>
          </Button>
          <Button variant="primary">
            <Link to="/ShoppingComponent">Shop Now</Link>
          </Button>
          <Button variant="primary">
            <Link to="/About">About Us</Link>
          </Button>
        </nav>
        <br></br>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>
    </>
  );
}

Header.propTypes = {
  numberOfCartItems: PropTypes.number,
  newItemQuantity: PropTypes.number,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
