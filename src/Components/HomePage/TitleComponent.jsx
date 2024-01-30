import react, { useEffect, useState } from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import PropTypes from "prop-types"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import storeImg from "../Images/nguyen-dang-hoang-nhu-Nne2TxFHPyQ-unsplash.jpg";
import storeImg from "../../../Images/nguyen-dang-hoang-nhu-Nne2TxFHPyQ-unsplash.jpg";
import insideStoreImg from "../../../Images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg"
import Modal from "../ProductAndShopping/SearchModal";

// import { useState } from "react";

import diamondImg from "../../../Icons/icons8-diamond-80.png";

import diamondImg2 from "../../../Icons/gem-svgrepo-com.svg";

import rubyImg from "../../../Icons/icons8-gem-80.png";

import necklacePhoto from "../../../Images/Image_4.jpeg"

import portraitPhoto from "../../../Images/pexels-pixabay-219550.jpg" 

import ringPhoto from "../../../Images/Image.png"

import earringPhoto from "../../../Images/img4.png"

import typesOfJewelry from "../../../Images/img5.png"

import portraitOfWoman2 from "../../../Images/img6.png"

import goldEarringPhoto from "../../../Images/img7.png"

import jeanJacketPhoto from "../../../Images/jean-jacket-img.png"

import earringPhoto2 from "../../../Images/img9.png"

import rubyPhoto from "../../../Images/ruby-img.png"


const images = [
  [necklacePhoto, portraitPhoto, ringPhoto], [earringPhoto, typesOfJewelry, portraitOfWoman2], [goldEarringPhoto, rubyPhoto, earringPhoto2]
];

export default function TitleComponent() { 

  const [index, setIndex] = useState(0);


const handleNext = (currentValue) => { 
  if (currentValue === images.length - 1) { 
    return 0;
  } else { 
    return currentValue + 1;
  }
};


useEffect(() => { 
  const interval = setInterval(() => { 
    setIndex((index) => handleNext(index));
  }, 4000);

  return () => clearInterval(interval);
}, []); 



    return ( 
        <> 
        <div className="main-title-section-wrapper">



        <div className="main-title-subtitle-container"> 

        
        <h3 className="title-component-header-text-styles">Discover the finest Fashion Gems
        {/* <img src={diamondImg} className="diamond-img-main"></img> */}
        </h3>
        <h6> Let us help you look and feel your best!</h6>
        <h6>We want you to shine like a diamond!

          <img src={diamondImg}></img>
        </h6>

  
       
     

        <div className="images-container"> 
      


          
          {images[index].map((img, i) => { 
            return ( 
            <> 
            <img key={i} src={img} alt="img" className="img-styles-title-component" />
            </>
            )
          })}



        </div>


        </div>



        </div>


        </>
    )
}

// TitleComponent.propTypes = { 
//     img1: PropTypes.string,
//     img2: PropTypes.string,
//     img3: PropTypes.string,
// } 








// export default function ImageCarouselComponent({ img1, img2, img3 }) { 

//   return ( 
//       <> 
//       <div className="main-component-container">
//           <h3>Welcome to our Store, browse our wonderful selection! We are family owned and carry on the tradition of helping you find the best products for the best prices! <br></br> <br></br>Let us help you!</h3>
          

//           <div className="store-img-container"> 
//           {/* <img src={storeImg} className="store-img-main" alt="inside a clothing store"></img> */}
          
//           <img
// sizes="(max-width: 640px) 100vw, 640px"

// // srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
// srcSet={`${insideStoreImg} 200w, ${insideStoreImg} 471w, ${insideStoreImg} 640w` }
// src={`${insideStoreImg} 640w`}
// alt=""></img>


//           </div>
      
//       <h4 className="featured-items-main-header">Featured Items</h4>

      
// <Carousel className="img-slider-container">
//     <Carousel.Item >

//       <div className="img1-container"> 
//       <img src={img1} alt="" className="img1-slider" />
//       </div>

//       {/* <Carousel.Caption>
//         <h3>First slide label</h3>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </Carousel.Caption> */}
//     </Carousel.Item>
//     <Carousel.Item>
//       <div className="img2-container"> 
//       <img src={img2} alt="" className="img2-slider" />
//       </div>

//       {/* <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </Carousel.Caption> */}
//     </Carousel.Item>
//     <Carousel.Item>
//     <div className="img3-container"> 
//       <img src={img3} alt="" className="img3-slider" />
//       </div>
//       {/* <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>
//           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//         </p>
//       </Carousel.Caption> */}
//     </Carousel.Item>
//   </Carousel>

//       <br></br>
//   {/* <div className="main-btn-container">
//   <Button variant="primary">Shop Now</Button>{' '}
//   <Button variant="primary">About Us</Button>{' '}
//   </div> */}
      
      
//   </div>
//       </>
//   )
// }