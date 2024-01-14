import react from "react"
import ShoppingComponent from "./ShoppingComponent";
import { useEffect, useState } from 'react';
import HomePage from "./HomePage";
import Header from "./Header";
// import { useEffect } from "react";
import crypto from 'crypto';


export default function CheckoutComponent( { cartItems, setCartItems, newCartItems, itemQuantity, setItemQuantity, isOpen, setIsOpen }) { 


    
    let total = 0;

    console.log(cartItems);
    // let productPrice = 0


    function handleDelete(item) { 
         setCartItems(cartItems.filter(selectedItem => selectedItem.title !== item.title ));
    } 

    function changeQuantityIncrement(item) {
    console.log('item before incrementing', item);

    console.log('itemQuanity before incrementing', itemQuantity);

    // itemQuantity++

    setItemQuantity(++item.quantity);

    console.log('itemQuanity after incrementing', itemQuantity);
   

    console.log('item after incrementing', item);
    } 


    function changeQuantityDecrement(item) { 
        setItemQuantity(--item.quantity);
    } 

   
    return ( 
        <> 
        <Header newCartItems={newCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>

        {cartItems.map((item) => { 

            
            

            let productPrice = 0

            productPrice += item.price * item.quantity

            total += productPrice


                {/* // setProductPrice(productPrice += item.price * item.quantity);
    
                // setCartTotal(cartTotal += productPrice);

                // setProductPriceFn(productPrice, item);

                // setCartTotalFn(productPrice, item) */}



            return ( 
            <> 

            
            <h5>{item.title}</h5>
            <img src={item.image} />
            <h5>{item.quantity}</h5>
            <h5>${item.price}</h5>
            <button onClick={((e) => {  
                console.log(itemQuantity);
                changeQuantityIncrement(item);

            })}>+</button>
            <input type="number" min="0" max="10" placeholder="0" value={item.quantity} onChange={((e) => { 
        

            })}> 
            </input>
            <button onClick={((e) => { 
                changeQuantityDecrement(item);
            })}>-</button>

            <button onClick={((e) => { 
                handleDelete(item)
            })}>Remove</button>


            <p>product price</p>
            <h1>{productPrice}</h1>


            </>
            
            
            )
        })}



        <p>total price</p>
        {<h1>{total}</h1>}

       
        </>


    )


}

