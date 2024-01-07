import react from "react"
import ShoppingComponent from "./ShoppingComponent";
import { useEffect, useState } from 'react';
import HomePage from "./HomePage";
import Header from "./Header";

// use .length to show how many items are in the cart, 
// this function is called which adds items to the state, 
// then we loop thru the variable, and display its total items using .length

export default function CheckoutComponent( { cartItems, newCartItems }) { 

    let total = 0;
   
    return ( 
        <> 
        
        <Header newCartItems={newCartItems} ></Header>
        <h1>Hello from checkout page</h1>

       
        {cartItems.map((item) => { 

            total += item.price * item.quantity

            return ( 
            <> 
            <h5>{item.title}</h5>
            <img src={item.image} />
            <h5>{item.quantity}</h5>
            <h5>${item.price}</h5>
            </>
            )
        })}

        {/* <h1>{setCurrentPrice(currentPrice + item.price)}</h1> */}
        {<h1>{total}</h1>}
       
        </>
    )
}

