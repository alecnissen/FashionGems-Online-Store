import react from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import PropTypes from "prop-types"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


export default function MainComponent({ data, img1, img2, img3, img4, img5 }) { 

    console.log(data);
    // propTypes.data; {
        // console.log(data);

    // }

    return ( 
        <> 
        <div className="main-component-container">
            <h3>Welcome to our Store, browse our wonderful selection! We are family owned and carry on the tradition of helping you find the best products for the best prices! <br></br> <br></br>Let us help you!</h3>
        <h4 className="featured-items-main-header">Featured Items</h4>

        {/* <div className="product-img-container-styles"> 
       {data.map((item) => { 
        // console.log(item);
        return ( 
            <img src={item.image} key={item.id} className="product-img-styles" alt="product-images"></img>
            
            
        )
       })}

            </div> */}

        
<Carousel className="img-slider-container">
      <Carousel.Item >

        <div className="img1-container"> 
        <img src={img1} alt="" className="img1-slider" />
        </div>

        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className="img2-container"> 
        <img src={img2} alt="" className="img2-slider" />
        </div>

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <div className="img3-container"> 
        <img src={img3} alt="" className="img3-slider" />
        </div>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

        <br></br>
    <div className="main-btn-container">
    <Button variant="primary">Shop Now</Button>{' '}
    <Button variant="primary">About Us</Button>{' '}
    </div>
        
        
    </div>
        </>
    )
}

MainComponent.propTypes = { 
    data: PropTypes.array,
}