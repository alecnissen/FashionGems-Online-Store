import react from "react"
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Footer from "./Footer";



export default function ProductPage( { cartItems, setCartItems, newCartItems }) { 

    const { id } = useParams();
    const [data, setData] = useState([]);

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
                  <input type="number" min="0" max="10"></input>
                  {/* <button>-</button>
                  <input></input>
                  <button>+</button> */}
                  <p>${data.price}</p>
                  <Button variant="primary" onClick={((e) => { 
                    setCartItems([...cartItems, data]);
                  })}>Add to Cart</Button>
                </Card.Body>
              </Card>
              </div>


          <Footer></Footer>
        </>
    )
}