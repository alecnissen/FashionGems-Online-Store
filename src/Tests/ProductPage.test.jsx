import { describe, it, expect } from 'vitest';
import * as ProductPage from '../Components/ProductAndShopping/ProductPage';


describe('able to add an item to the cart', () => { 

  it('should be able to add an item to the cart'), () => { 
  const singleProductData = {
    title: 'Sample Product',
    description: 'Sample description',
    price: 10.99,
    image: 'sample_image.jpg',
  };

}

  expect(singleProductData.title).toEqual('Sample Product');
}) 










// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });

