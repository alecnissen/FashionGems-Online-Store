import react from 'react';
import Header from './Header';
import { useEffect, useState } from 'react';
import ApiRequest from '../../API-CALLS/ApiRequest';
import TitleComponent from './TitleComponent';
import CategoryListComponent from './CategoryListComponent';
import TrendingAndOffers from './TrendingAndOffers';
import FooterAndBlog from './FooterAndBlog';

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
  }, []);

  return (
    <>
      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
      <TitleComponent></TitleComponent>
      <CategoryListComponent></CategoryListComponent>
      <TrendingAndOffers></TrendingAndOffers>
      <FooterAndBlog></FooterAndBlog>
    </>
  );
}
