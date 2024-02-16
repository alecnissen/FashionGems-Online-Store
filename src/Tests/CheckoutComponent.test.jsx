import Header from '../Components/HomePage/Header';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CheckoutComponent from '../Components/ProductAndShopping/CheckoutComponent';

describe('Checking the number of items in the cart within the checkout componentq', () => { 

    it('displays the correct number of items in the cart within checkout component'), () => { 
        const numberOfCartItems = 3;

        render(<CheckoutComponent numberOfCartItems={numberOfCartItems}></CheckoutComponent>)

        const cartItemCountElement = screen.getAllByTestId('number-of-cart-items-text-styles');

        expect(cartItemCountElement.textContent).toBe(3);
    }
  
  }) 




//   const numberOfCartItems = 3;
  
//   render(<Header numberOfCartItems={numberOfCartItems}></Header>)

//   const cartItemCountElement = screen.getByTestId('badge-icon-for-shopping-cart');

//   expect(cartItemCountElement.textContent).toBe(3);