import react from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CheckoutComponent from '../ProductAndShopping/CheckoutComponent';
import ImageCarouselComponent from './TitleComponent';
// import apiRequest from '../../API-CALLS/ApiRequest';
import ApiRequest from '../../API-CALLS/ApiRequest';
import TitleComponent from './TitleComponent';
import CategoryListComponent from './CategoryListComponent';
import TrendingAndOffers from './TrendingAndOffers';

export default function HomePage({ numberOfCartItems, isOpen, setIsOpen }) {
  const [productData, setProductData] = useState([]);
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [img4, setImg4] = useState('');
  const [img5, setImg5] = useState('');

  useEffect(() => {
    ApiRequest().then((data) => {
      setProductData(data);

      setImg1(data[0].image);
      setImg2(data[1].image);
      setImg3(data[2].image);
      setImg4(data[3].image);
      setImg5(data[4].image);
    });

    // const getData = async () => {
    //   try {
    //     const response = await axios.get('https://fakestoreapi.com/products');
    //     console.log(response.data);
    //     setProductData(response.data);
    //     setImg1(response.data[0].image);
    //     setImg2(response.data[1].image);
    //     setImg3(response.data[2].image);
    //     setImg4(response.data[3].image);
    //     setImg5(response.data[4].image);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();
  }, []);

  return (
    <>


      {/* <ImageCarouselComponent
        productData={productData}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
      ></ImageCarouselComponent> */}


      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
      <TitleComponent></TitleComponent>
      <CategoryListComponent></CategoryListComponent>
      <TrendingAndOffers></TrendingAndOffers>


      {/* <Footer></Footer> */}
    </>
  );
}

HomePage.propTypes = {
  numberOfCartItems: PropTypes.number,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
