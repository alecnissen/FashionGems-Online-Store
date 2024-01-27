import react from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import PropTypes from "prop-types"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import storeImg from "../Images/nguyen-dang-hoang-nhu-Nne2TxFHPyQ-unsplash.jpg";
import storeImg from "../../../Images/nguyen-dang-hoang-nhu-Nne2TxFHPyQ-unsplash.jpg";
import insideStoreImg from "../../../Images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg"
import Modal from "../ProductAndShopping/SearchModal";

import diamondImg from "../../../Icons/icons8-diamond-80.png";

import diamondImg2 from "../../../Icons/gem-svgrepo-com.svg";

import rubyImg from "../../../Icons/icons8-gem-80.png";

import necklacePhoto from "../../../Images/Image_4.jpeg"

import portraitPhoto from "../../../Images/pexels-pixabay-219550.jpg" 

import ringPhoto from "../../../Images/Image.png";

export default function TitleComponent() { 


  // function that holds all images, loops through them, 
  // then changes the src of the image to the new image, 

  function imageGenerator() { 
    // let necklacePhoto1 = necklacePhoto;
    // let portraitPhoto2 = portraitPhoto;
    // let ringPhoto3 = ringPhoto; 

    let photoArray = [{ 
      img: necklacePhoto,
      id: crypto.randomUUID()
    }, 
    { 
      img: portraitPhoto,
      id: crypto.randomUUID(),
    },
    { 
      img: ringPhoto,
      id: crypto.randomUUID(),
    }
  ]

  photoArray.map((photo) => { 
    console.log(photo);
  })
   

  } 

  console.log(imageGenerator());




    return ( 
        <> 
        <div className="main-title-section-wrapper">



        <div className="main-title-subtitle-container"> 

        
        <h3>Discover the finest Fashion Gems
        {/* <img src={diamondImg} className="diamond-img-main"></img> */}
        </h3>
        <h6> Let us help you look and feel your best!</h6>
        <h6>We want you to shine like a diamond!

          <img src={diamondImg}></img>
        </h6>

  
       
     
      {/* <button>Search</button> */}
{/* 
       <div className="main-diamond-img-container" style={
          { 
            backgroundImage: `url("../../../Images/pexels-pixabay-219550.jpg")`,
            width: "30em",
            height: "30em",
            objectFit: "contain",
          }
        }>

          <div style={
            { 
              backgroundImage: `url("../../../Images/Image_4.jpeg")`,
              width: "30em",
              height: "30em",
              objectFit: "contain",
            }
          }> 

          </div>
        </div>  */}


        {/* <div className="main-diamond-img-container">
        <img src={portraitPhoto} className="portrait-photo-styles"></img>
        
        <div className="style"> 
        <img src={ringPhoto} className="ring-photo-styles"></img>
        <img src={necklacePhoto} className="necklace-styles"></img> 
        </div>
        
        </div> */}



        <div className="images-container"> 

          <div className="portrait-photo-container"> 
          <img src={portraitPhoto} className="portrait-photo-styles"></img>
          </div>

          <div className="ring-photo-styles-container"> 
          <img src={ringPhoto} className="ring-photo-styles"></img>
          </div>

          <div className="necklace-photo-styles-container"> 
          <img src={necklacePhoto} className="necklace-styles"></img>
          </div>

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