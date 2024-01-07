import react from "react"
import ShoppingComponent from "./ShoppingComponent";
import { useEffect, useState } from 'react';
import HomePage from "./HomePage";
import Header from "./Header";

// use .length to show how many items are in the cart, 
// this function is called which adds items to the state, 
// then we loop thru the variable, and display its total items using .length

export default function CheckoutComponent( { cartItems, setCartItems, newCartItems, itemQuantity, setItemQuantity }) { 

    let total = 0;
    let addValue = 0


    function handleDelete(item) { 
         setCartItems(cartItems.filter(selectedItem => selectedItem.title !== item.title ));
    } 

    function changeQuantityIncrement(item) {
    console.log(item);

    setItemQuantity(item.quantity++)
   

    console.log('item after incrementing', item);
      
    } 


    function changeQuantityDecrement(item) { 
        setItemQuantity(item.quantity--);
    }
   
    return ( 
        <> 
        
        <Header newCartItems={newCartItems} ></Header>
        <h1>Hello from checkout page</h1>

       
        {cartItems.map((item) => { 

            total += item.price * item.quantity

            // console.log('item quantity before change', item.quantity)

            console.log(total);

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
            <input type="number" min="0" max="10" placeholder="1" value={item.quantity} onChange={((e) => { 
        

            })}> 
            </input>
            <button onClick={((e) => { 
                changeQuantityDecrement(item);
            })}>-</button>

            <button onClick={((e) => { 
                handleDelete(item)
            })}>Remove</button>
            </>
            )
        })}

        {<h1>{total}</h1>}
       
        </>
    )
}

