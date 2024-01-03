import react from "react"
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";



export default function ProductPage() { 

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
        <h1></h1>
        <img src={data.image} alt="displays clicked on product" />
        </>
    )
}