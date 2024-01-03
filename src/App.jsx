import './App.css'
import react from "react"
import Header from './Header'
import MainComponent from './MainComponent'
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import Footer from './Footer';
import ShoppingComponent from './ShoppingComponent';
import NotFound from './NotFound';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router-dom'
import ProductPage from './ProductPage';
import About from './About';


function App() {
//   const [data, setData] = useState([]);
//   const [img1, setImg1] = useState('');
//   const [img2, setImg2] = useState('');
//   const [img3, setImg3] = useState('');
//   const [img4, setImg4] = useState('');
//   const [img5, setImg5] = useState('');

// useEffect(() => { 
//   const getData = async () => { 
//     try { 
//       const response = await axios.get('https://fakestoreapi.com/products')
//       console.log(response.data);
//       setData(response.data);
//       setImg1(response.data[0].image);
//       setImg2(response.data[1].image);
//       setImg3(response.data[2].image);
//       setImg4(response.data[3].image);
//       setImg5(response.data[4].image);
//     } catch (error) { 
//       console.log(error);
//     }
//   }
//   getData();
// }, [])

  return (
    <>
  {/* <Header></Header>
  <MainComponent data={data} img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} ></MainComponent>
  <Footer></Footer>  */}

    <Routes> 
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/ShoppingComponent' element={<ShoppingComponent></ShoppingComponent>}></Route>
      <Route path='/ProductPage/:id' element={<ProductPage></ProductPage>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  
    </>
  )
}

export default App
