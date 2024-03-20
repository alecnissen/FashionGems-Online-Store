// import React from 'react';
// import Header from '../Components/HomePage/Header';
// import { getByText, render, screen, fireEvent, getByTestId } from '@testing-library/react';
// import { describe, it, expect } from 'vitest';
// import CheckoutComponent from '../Components/ProductAndShopping/CheckoutComponent';
// import { userEvent } from '@testing-library/user-event';
// import { BrowserRouter } from 'react-router-dom';





// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import CheckoutComponent from './CheckoutComponent';

// describe('CheckoutComponent', () => {
//   it('correctly updates and displays an item\'s quantity', () => {
//     const mockCartItems = [
//       { title: 'Item 1', price: 10.99, quantity: 1, image: 'item1.jpg' },
//       { title: 'Item 2', price: 15.99, quantity: 2, image: 'item2.jpg' },
//     ];

//     const setCartItems = jest.fn();
//     const setItemQuantity = jest.fn();

//     render(
//       <CheckoutComponent
//         cartItems={mockCartItems}
//         setCartItems={setCartItems}
//         numberOfCartItems={mockCartItems.length}
//         itemQuantity={1}
//         setItemQuantity={setItemQuantity}
//         isOpen={false}
//         setIsOpen={jest.fn()}
//       />
//     );

//     // Find the increment button for the first item and click it
//     const incrementButton = screen.getAllByTestId('increment-btn-checkout')[0];
//     fireEvent.click(incrementButton);

//     // Check if setItemQuantity was called with the updated quantity
//     expect(setItemQuantity).toHaveBeenCalledWith(2); // Assuming the initial quantity is 1

//     // Find the decrement button for the second item and click it
//     const decrementButton = screen.getAllByText('-')[1];
//     fireEvent.click(decrementButton);

//     // Check if setItemQuantity was called with the updated quantity
//     expect(setItemQuantity).toHaveBeenCalledWith(1); // Assuming the initial quantity is 2

//     // Check if the updated quantities are displayed correctly
//     expect(screen.getAllByText('Quantity: 2')).toHaveLength(1);
//     expect(screen.getAllByText('Quantity: 1')).toHaveLength(1);
//   });
// });












































// import '@testing-library/jest-dom/extend-expect'; 

// describe('Checking the number of items in the cart within the checkout component', () => { 

//     it('displays the correct number of items in the cart within checkout component'), () => { 
//         const numberOfCartItems = 3;


        
//         render(<CheckoutComponent numberOfCartItems={numberOfCartItems}></CheckoutComponent>)

//         const cartItemCountElement = screen.getAllByTestId('number-of-cart-items-text-styles');

//         expect(cartItemCountElement.textContent).toBe(3);
//     }
  
//   }) 



// console.log('hi')




// describe('Checking to see if the checkout component correctly calculates and displays item price', () => {
//   it('displays the correct price of an item, also accounting for the items quantity'), () => { 
//       const cartItems = [
//           { title: 'Item 1', price: 10, quantity: 2 }, // In order to test product price, I need to make mock products with a price and quantity. 
//           { title: 'Item 1', price: 15, quantity: 3 },
//       ]

//       console.log('hi')

//       render(<CheckoutComponent></CheckoutComponent>) // render the component so I can interact with it. 

//       const incrementBtn = getByText('+'); // I grab the button that increments quantity. 
//       const displayProductPrice = getByText('Total: '); // I grab the element that displays product total. 
//       const getTotalProductPriceValue = displayProductPrice.textContent; // I grab the textContent(value) of that display element. 
//       const cartItem1 = cartItems[0]; // grab an item from the array
//       console.log(cartItem1);
//       cartItem1.userEvent.click(incrementBtn); // simulate a click event which increases the items quantity.
//       const cartItem1TotalPrice = cartItem1.price * cartItem1.quantity; // calculate total price of the item
//       expect(Number(cartItem1TotalPrice)).toBe(Number(getTotalProductPriceValue)); // compare items total price to what is displayed in the component. 
//   }
// }) 

// test #1 throwing error saying cannot read properties of undefined reading 'length'

// current test 

// describe('Checking to see if the checkout component correctly calculates and displays item price', () => { 
//   it('displays the correct price of an item, also accounting for the items quantity', () => { 
//       const cartItems = [
//           { title: 'Item 1', price: 10, quantity: 2 }, // In order to test product price, I need to make mock products with a price and quantity. 
//           { title: 'Item 1', price: 15, quantity: 3 },
//       ]

//       render(<BrowserRouter><CheckoutComponent cartItems={cartItems}></CheckoutComponent></BrowserRouter>) // render the component so I can interact with it. 

//       const incrementBtn = screen.queryAllByText('+'); // I grab the button that increments quantity. 
//       // const incrementBtn = screen.getByTestId('increment-btn-checkout');
//       const displayProductPrice = screen.queryAllByText('Total: '); // I grab the element that displays product total. 
//       const getTotalProductPriceValue = displayProductPrice.textContent; // I grab the textContent(value) of that display element. 
//       const cartItem1 = cartItems[0]; // grab an item from the array
//       console.log(cartItem1);
//       cartItem1.userEvent.click(incrementBtn); // simulate a click event which increases the items quantity.
//       const cartItem1TotalPrice = cartItem1.price * cartItem1.quantity; // calculate total price of the item
//       expect(Number(cartItem1TotalPrice)).toBe(Number(getTotalProductPriceValue)); // compare items total price to what is displayed in the component. 
//   })
// })






// describe('CheckoutComponent', () => {
//   it('displays the correct total price for a single product in the shopping cart', () => {
//     // Mock cart items with a single item
//     const cartItems = [
//       { title: 'Item 1', price: 10, quantity: 2 },
//     ];

//     // Render the component with the mock cart items
//     render(<BrowserRouter><CheckoutComponent cartItems={cartItems} /> </BrowserRouter>);

//     // Simulate a click event on the increment button to increase quantity
//     const incrementBtn = screen.getByText('+');
//     userEvent.click(incrementBtn);

//     // Calculate the expected total price based on the item's price and quantity
//     const productPrice = cartItems[0].price;
//     const totalPrice = productPrice * (cartItems[0].quantity + 1);

//     // Assert that the expected total price is displayed in the component
//     expect(screen.getByText(`Total: $${totalPrice.toFixed(2)}`)).toBeInTheDocument();
//   });
// });



// describe('CheckoutComponent', () => {
//   it('displays the correct total price for a single product in the shopping cart', () => {
//     // Mock cart items with a single item
//     const cartItems = [
//       { title: 'Item 1', price: 10, quantity: 2 },
//     ];

//     // Render the component with the mock cart items
//     render(<BrowserRouter><CheckoutComponent cartItems={cartItems}/></BrowserRouter>);

//     // Simulate a click event on the increment button to increase quantity
//     const incrementBtn = screen.getByText('+');
//     userEvent.click(incrementBtn);

//     // Calculate the expected total price based on the item's price and quantity
//     const productPrice = cartItems[0].price;
//     const totalPrice = productPrice * (cartItems[0].quantity + 1);

//     // Assert that the expected total price is displayed in the component
//     expect(screen.getByText(text => text.includes(`Total: $${totalPrice.toFixed(2)}`))).toBeInTheDocument();
//   });
// });


// describe('CheckoutComponent', () => {
//   it('displays the correct total price for a single product in the shopping cart', () => {
//     const cartItems = [
//       { title: 'Item 1', price: 10, quantity: 2 },
//     ];

//     render(<CheckoutComponent cartItems={cartItems} />);

//     const incrementBtn = screen.getByText('+');
//     fireEvent.click(incrementBtn);

//     const productPrice = cartItems[0].price;
//     const totalPrice = productPrice * (cartItems[0].quantity + 1);

//     expect(screen.getByTestId('total-price')).toHaveTextContent(`Total: $${totalPrice.toFixed(2)}`);
//   });
// });
