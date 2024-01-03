import react from "react" 
import Header from "./Header"
import Footer from "./Footer"
import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Outlet, useSearchParams } from "react-router-dom"


export default function ShoppingComponent() { 

    const [data, setData] = useState([]);

    useEffect(() => { 
  const getData = async () => { 
    try { 
      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response.data);
      setData(response.data);
    //   setImg1(response.data[0].image);
    //   setImg2(response.data[1].image);
    //   setImg3(response.data[2].image);
    //   setImg4(response.data[3].image);
    //   setImg5(response.data[4].image);
    } catch (error) { 
      console.log(error);
    }
  }
  getData();
}, [])

    return ( 
        <> 
        <Header></Header>
        <h1>Our Collection</h1>

        <div className="shopping-component-products-container"> 
            {data.map((item) => { 
                 return ( 
                    // <img src={item.image} key={item.id} className="product-img-styles" alt="product-images"></img>
                    <div className="shopping-component-card-container" key={item.id}> 


                    {/* <Link to={`/ProductPage/${item.id}`}>  */}

                    <Card style={{ width: '18rem' }}>
                      <Link to={`/ProductPage/${item.id}`}> 
                    <Card.Img variant="top" src={item.image} style={{ width: '10em' }} className="shopping-component-card-img" />
                    </Link>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      {/* <Card.Text>
                        {item.description}
                      </Card.Text> */}
                      <p>Select Quanity</p>
                      <input type="number" min="0" max="10"></input>
                      {/* <button>-</button>
                      <input></input>
                      <button>+</button> */}
                      <p>${item.price}</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>


                  {/* </Link> */}

                    
                    </div>
                )
            })}
        </div>

        <Footer></Footer>
        </>
    )
}