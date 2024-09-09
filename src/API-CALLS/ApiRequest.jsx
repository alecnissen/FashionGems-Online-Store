import React from 'react';
import axios from 'axios';
import App from '../App';
import ShoppingComponent from '../Components/ProductAndShopping/ShoppingComponent';
import { useEffect, useState } from 'react';

export default async function ApiRequest(id) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id ? id : ''}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      setError('Server responded with ' + ' ' + error.response.status + ' ' + 'error');
    } else if (error.request) {
      console.log(error.request);
      setError(error.request);
    } else {
      console.log('Error', error.message);
      setError(error.message);
    }
    console.log(error.config);
  } finally {
  }
}
