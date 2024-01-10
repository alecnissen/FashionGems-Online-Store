import react from "react" 
import Header from "./Header"
import Footer from "./Footer"
import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Outlet, useSearchParams } from "react-router-dom"
// import Checkout from "./CheckoutComponent"
import CheckoutComponent from "./CheckoutComponent"
import PropTypes from "prop-types"


export default function ShoppingComponent( { cartItems, setCartItems, newCartItems, itemQuantity, setItemQuantity, selectedProduct, setSelectedProduct }) { 

    const [data, setData] = useState([]);

    console.log(itemQuantity);

    useEffect(() => { 
  const getData = async () => { 
    try { 
      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response.data);
      setData(response.data);
    } catch (error) { 
      console.log(error);
    }
  }
  getData();
}, [])

function changeAmount(item, itemQuantity) {
  
  const newItem = { 
    title: item.title,
    description: item.description,
    price: item.price,
    quantity: itemQuantity,
    image: item.image
  }

  setCartItems([...cartItems, newItem]);

  console.log(cartItems);
  
}

    return ( 
        <> 
        <Header newCartItems={newCartItems}></Header>
        <h1 className="shopping-component-header-text">Our Collection</h1>

        <div className="shopping-component-products-container"> 
            {data.map((item) => { 
                 return ( 
                    <div className="shopping-component-card-container" key={item.id}> 

                    <Card style={{ width: '18rem' }} onClick={(e) => { 
                      // console.log(item);
                      // setSelectedProduct(item);
                    }}>
                      <Link to={`/ProductPage/${item.id}`}> 
                    <Card.Img variant="top" src={item.image} style={{ width: '10em' }} className="shopping-component-card-img" />
                    </Link>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <p>Select Quanity</p>
                      <input type="number" min="0" max="10" placeholder="0" onChange={(e) => { 
                        setItemQuantity(e.target.value);
                        console.log(itemQuantity);
                      }}></input>
                      <p>${item.price}</p>
                      <Button variant="primary" onClick={(e) => { 

                        changeAmount(item, itemQuantity);

                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                    </div>
                )
            })}
        </div>

        <Footer></Footer>
        </>
    )
}

// ShoppingComponent.propTypes = { 
//   cartItems: PropTypes.array,
//   // setCartItems: PropTypes.array,
//   newCartItems: PropTypes.number,
//   itemQuantity: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.number]))
//   // setItemQuantity: PropTypes.array,
// }