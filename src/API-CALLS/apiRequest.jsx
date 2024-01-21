import React from 'react'
import axios from 'axios';
import App from '../App';
// import { useEffect, useState } from 'react';

export default async function apiRequest(id) {

  // let errorMessage = setError
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // setLoading(true);
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
        console.log('yo');
        // setLoading(false);
    } 

    // return id ? 

  return (
    <div>
    {/* <App error={error} loading={loading}></App> */}
    </div>
  )
}

// console.log(apiRequest());

// state gets updated here and passed to App 


