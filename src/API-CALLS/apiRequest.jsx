import React from 'react'
import axios from 'axios';

export default async function apiRequest(id) {

    try {  
    const response = await axios.get(`https://fakestoreapi.com/products/${id ? id : ""}`);
    console.log(response.data); 

    // if (id !== null) { 
    //     // const response = await axios.get('https://fakestoreapi.com/products');
    //     const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    //     return response.data;
    // }
    return response.data;
    } catch (error) { 
        console.log(error);
    } finally { 
        console.log('yo')
    } 

    // return id ? 

  return (
    <div>
    
    </div>
  )
}

// console.log(apiRequest());


