import react from "react"
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Footer from "./Footer";


let count = 0;

export default function ProductPage( { cartItems, setCartItems, newCartItems, itemQuantity, setItemQuantity, selectedProduct, setSelectedProduct }) { 

    const { id } = useParams();
    const [data, setData] = useState([]);

    // let count = 0;

    console.log(id);

    console.log(selectedProduct);

    console.log(itemQuantity);

    useEffect(() => { 
        const getData = async () => { 
          try { 
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(response.data);
            setData(response.data);
          } catch (error) { 
            console.log(error);
          }
        }
        getData();
      }, [id]) 


  function changeAmount(data, itemQuantity) {
  
    const newItem = { 
      title: data.title,
      description: data.description,
      price: data.price,
      image: data.image,
      quantity: itemQuantity,
  }

  console.log(data);

  // console.log(itemQuantity);

    setCartItems([...cartItems, newItem]);

    console.log(newItem);

    console.log(cartItems);
  
} 


function changeQuantityIncrement(count) {

  console.log(data.quantity);

  console.log(count)

  setItemQuantity(count)

  console.log(itemQuantity);
 

  // console.log('item after incrementing', data);
  } 




  function changeQuantityDecrement(data) { 
      setItemQuantity(data.quantity--);
  } 


    return ( 
        <> 
        <Header newCartItems={newCartItems}></Header>
        {/* <h3>{data.title}</h3>
        <img src={data.image} alt="displays clicked on product" />
        <h5>{data.description}</h5>
        <h5>${data.price}</h5>
        <input type="number" min="0" max="10" placeholder="10"></input>
        <Button variant="primary">Add to Cart</Button> */}
                <div className="product-page-item-container">
                  <Card style={{ width: '18rem' }}>
                <h4>{data.title}</h4>
                  {/* <Link to={`/ProductPage/${item.id}`}>  */}
                <Card.Img variant="top" src={data.image} style={{ width: '10em' }} className="shopping-component-card-img" />
                {/* </Link> */}
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                  <p>Select Quanity</p>
                  <button onClick={(e) => { 
                    // count here, increment count, then pass to function 
                    
                    count += 1
                    console.log(count);
                    changeQuantityIncrement(count);
                  }}>+</button>
                  <input type="number" min="0" max="10" value={count} onChange={(e) => { 
                    // setItemQuantity(e.target.value);

                    // x = e.target.value
                  }}>
                    

                  </input>

                  <button onClick={(e) => { 
                    changeQuantityDecrement(data);
                  }}>-</button>


                  {/* <button>-</button>
                  <input></input>
                  <button>+</button> */}
                  <p>${data.price}</p>
                  <Button variant="primary" onClick={((e) => { 
                    // setCartItems([...cartItems, data]);
                    changeAmount(data, itemQuantity);
                    count = 0;
                  })}>Add to Cart</Button>
                </Card.Body>
              </Card>
              </div>


          <Footer></Footer>
        </>
    )
}