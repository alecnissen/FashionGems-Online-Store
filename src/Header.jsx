import react from "react"
import Button from 'react-bootstrap/Button';
import searchIcon from "../Icons/search-svgrepo-com.svg"
import cartIcon from "../Icons/cart-shopping-svgrepo-com.svg"
import { Link, Outlet, useSearchParams } from "react-router-dom"
import PropTypes from "prop-types"
import ShoppingComponent from "./ShoppingComponent";
import Modal from "./Modal";

export default function Header( { numberOfCartItems, isOpen, setIsOpen } ) { 
    // console.log(typeof newCartCount);
    // console.log(typeof newItemQuantity);

    return ( 
    <> 
    <div className="header-style-container">

    <h1>Shopping Cart</h1> 
    
    <nav className="header-navbar-styles"> 
    <Button variant="primary"><Link to="/">Home</Link></Button>
    <Button variant="primary"><Link to="/ShoppingComponent">Shop Now</Link></Button>
    <Button variant="primary"><Link to="/About">About Us</Link></Button>
    </nav> 

    <br></br>

<div className="header-icon-container"> 

{/* <img src={searchIcon} className="search-icon-header"> 


</img> */} 

<button onClick={() => { 
    console.log('modal test')
    setIsOpen(true)
}}>Search</button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>


<div className="badge-icon-for-shopping-cart">{numberOfCartItems}</div>
{/* <img src={cartIcon} className="cart-icon-header" onClick={(e) => { 
    <Link to="/CheckoutComponent"></Link>
}} >

</img> */}

{/* <Link to="/CheckoutComponent">Checkout</Link> */}

{/* <a href="/CheckoutComponent">Checkout</a> */}

<Button variant="primary"><Link to="/CheckoutComponent">Checkout</Link></Button>



</div>
   
</div>
</>
) 
} 

Header.propTypes = { 
    numberOfCartItems: PropTypes.number,
    newItemQuantity: PropTypes.number,
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func
}