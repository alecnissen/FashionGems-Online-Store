import react from "react"
import ShoppingComponent from "./ShoppingComponent";
import { useEffect, useState } from 'react';
import HomePage from "./HomePage";
import Header from "./Header";
// import { useEffect } from "react";
import crypto from 'crypto';
import PropTypes from "prop-types"


// export default function CheckoutComponent( { cartItems, setCartItems, newCartItems, itemQuantity, setItemQuantity, isOpen, setIsOpen }) { 
//     let total = 0;
//     // let productPrice = 0

//     function handleDelete(item) { 
//          setCartItems(cartItems.filter(selectedItem => selectedItem.title !== item.title ));
//     } 

//     function changeQuantityIncrement(item) {
//         setItemQuantity(++item.quantity);
//     } 

//     function changeQuantityDecrement(item) { 
//         setItemQuantity(--item.quantity);
//     } 

//     return ( 
//         <> 
//         <Header newCartItems={newCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
//         {cartItems.map((item) => { 
//             <div key={item.id}>   // added div around all       
//             let productPrice = 0
//             productPrice += item.price * item.quantity
//             total += productPrice

//             return ( 
//                 <> 
//             <h5>{item.title}</h5>
//             <img src={item.image} />
//             <h5>{item.quantity}</h5>
//             <h5>${item.price}</h5>
//             <button onClick={((e) => {  
//                 console.log(itemQuantity);
//                 changeQuantityIncrement(item);

//             })}>+</button>
//             <input type="number" min="0" max="10" placeholder="0" value={item.quantity} onChange={((e) => { 

//             })}> 
//             </input>
//             <button onClick={((e) => { 
//                 changeQuantityDecrement(item);
//             })}>-</button>

//             <button onClick={((e) => { 
//                 handleDelete(item)
//             })}>Remove</button>
//             <p>product price</p>
//             <h1>{productPrice}</h1>

//             </>
//             )
//             </div>  // closing tag here
        
//         })}
//         <p>total price</p>
//         {<h1>{total}</h1>}
//         </>
//     )
// }


export default function CheckoutComponent({ cartItems, setCartItems, numberOfCartItems, itemQuantity, setItemQuantity, isOpen, setIsOpen }) {
    let total = 0;
    // let productPrice = 0;

    console.log(typeof cartItems)
    console.log(typeof setCartItems)
    // console.log(typeof newCartItems)
    console.log(typeof itemQuantity)
    console.log(typeof setItemQuantity)
    console.log(typeof isOpen)
    console.log(typeof setIsOpen)

    function handleDelete(item) {
        setCartItems(cartItems.filter(selectedItem => selectedItem.title !== item.title));
    }

    function changeQuantityIncrement(item) {
        setItemQuantity(++item.quantity);
    }

    function changeQuantityDecrement(item) {
        setItemQuantity(--item.quantity);
    }

    return (
        <>
            <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
            {cartItems.map((item) => {
                let productPrice = item.price * item.quantity; 
                total += productPrice;

                return (
                    <div key={item.id}>
                        <h5>{item.title}</h5>
                        <img src={item.image} />
                        <h5>{item.quantity}</h5>
                        <h5>${item.price}</h5>
                        <button onClick={() => {
                            console.log(itemQuantity);
                            changeQuantityIncrement(item);
                        }}>+</button>
                        <input
                            type="number"
                            min="0"
                            max="10"
                            placeholder="0"
                            value={item.quantity}
                            onChange={() => {

                            }}>
                        </input>
                        <button onClick={() => {
                            changeQuantityDecrement(item);
                        }}>-</button>
                        <button onClick={() => {
                            handleDelete(item);
                        }}>Remove</button>
                        <p>product price</p>
                        <h1>{productPrice}</h1>
                    </div>
                );
            })}
            <p>total price</p>
            <h1>{total}</h1>
        </>
    )
}


CheckoutComponent.propTypes = { 
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func,
    numberOfCartItems: PropTypes.number,
    itemQuantity: PropTypes.array,
    setItemQuantity: PropTypes.func,
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
}



// About.propTypes = { 
   
//     newCartItems: PropTypes.number,
//     isOpen: PropTypes.bool,
//     setIsOpen: PropTypes.func,

// object 
// function 
// number 
// object 
// function 
// boolean 
// function 

// }
