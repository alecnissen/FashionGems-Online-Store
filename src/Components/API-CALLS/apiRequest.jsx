import React from 'react'
import axios from 'axios';

export default async function apiRequest(id) {

    try {  
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data);
    } catch (error) { 
        console.log(error);
    } finally { 
        console.log('yo')
    }

  return (
    <div>
    
    </div>
  )
}

// console.log(apiRequest());


