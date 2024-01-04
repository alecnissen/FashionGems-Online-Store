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
import CheckoutComponent from './CheckoutComponent';


function App() {

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
      <Route path='/CheckoutComponent' element={<CheckoutComponent></CheckoutComponent>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  
    </>
  )
}

export default App
