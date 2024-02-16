import Header from '../Components/HomePage/Header';
import { getByText, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CheckoutComponent from '../Components/ProductAndShopping/CheckoutComponent';
import { userEvent } from '@testing-library/user-event';

describe('Checking the number of items in the cart within the checkout component', () => { 

    it('displays the correct number of items in the cart within checkout component'), () => { 
        const numberOfCartItems = 3;

        render(<CheckoutComponent numberOfCartItems={numberOfCartItems}></CheckoutComponent>)

        const cartItemCountElement = screen.getAllByTestId('number-of-cart-items-text-styles');

        expect(cartItemCountElement.textContent).toBe(3);
    }
  
  }) 



console.log('hi')




describe('Checking to see if the checkout component correctly calculates and displays item price', () => {
  it('displays the correct price of an item, also accounting for the items quantity'), () => { 
      const cartItems = [
          { title: 'Item 1', price: 10, quantity: 2 }, // In order to test product price, I need to make mock products with a price and quantity. 
          { title: 'Item 1', price: 15, quantity: 3 },
      ]

      console.log('hi')

      render(<CheckoutComponent></CheckoutComponent>) // render the component so I can interact with it. 

      const incrementBtn = getByText('+'); // I grab the button that increments quantity. 
      const displayProductPrice = getByText('Total: '); // I grab the element that displays product total. 
      const getTotalProductPriceValue = displayProductPrice.textContent; // I grab the textContent(value) of that display element. 
      const cartItem1 = cartItems[0]; // grab an item from the array
      console.log(cartItem1);
      cartItem1.userEvent.click(incrementBtn); // simulate a click event which increases the items quantity.
      const cartItem1TotalPrice = cartItem1.price * cartItem1.quantity; // calculate total price of the item
      expect(Number(cartItem1TotalPrice)).toBe(Number(getTotalProductPriceValue)); // compare items total price to what is displayed in the component. 
  }
}) 