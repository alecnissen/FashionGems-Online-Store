import react from "react"
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Footer from "./Footer";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";


let count = 0;

export default function ProductPage( { cartItems, setCartItems, newCartItems, itemQuantity, setItemQuantity, isOpen, setIsOpen }) { 

    const { id } = useParams();
    const [data, setData] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // let count = 0;

    console.log(id);

    // console.log(selectedProduct);

    console.log(itemQuantity);

    useEffect(() => { 
        const getData = async () => { 
           setLoading(true);
          try { 
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(response.data);
            setData(response.data);
          } catch (error) { 
            console.log(error);
             if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        setError('Server responded with ' + ' ' + error.response.status + ' ' + 'error');
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        setError(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        setError(error.message);
      }
      console.log(error.config);
          } finally { 
            setLoading(false);
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




  function changeQuantityDecrement(count) { 
    setItemQuantity(count)
  } 


    return ( 
        <> 
        <Header newCartItems={newCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
        {/* <h3>{data.title}</h3>
        <img src={data.image} alt="displays clicked on product" />
        <h5>{data.description}</h5>
        <h5>${data.price}</h5>
        <input type="number" min="0" max="10" placeholder="10"></input>
        <Button variant="primary">Add to Cart</Button> */} 

         {error && <ErrorComponent error={error}></ErrorComponent>}
         {loading && <LoadingComponent></LoadingComponent>}

                {!error && <div className="product-page-item-container" key={data.id}>
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
                    count += 1
                    changeQuantityIncrement(count);
                  }}>+</button>
                  <input type="number" min="0" max="10" value={count} onChange={(e) => { 
                    // setItemQuantity(e.target.value);

                    // x = e.target.value
                  }}>
                    

                  </input>

                  <button onClick={(e) => { 
                     count -= 1
                    changeQuantityDecrement(count);
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
              </div>}


          <Footer></Footer>
        </>
    )
}