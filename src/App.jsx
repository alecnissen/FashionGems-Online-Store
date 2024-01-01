import './App.css'
import react from "react"
import Header from './Header'
import MainComponent from './MainComponent'
import axios from 'axios'; 
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);

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

  return (
    <>
  <Header></Header>
  <MainComponent data={data}></MainComponent>
    </>
  )
}

export default App
