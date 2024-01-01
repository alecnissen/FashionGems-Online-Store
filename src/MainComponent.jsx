import react from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import PropTypes from "prop-types"



export default function MainComponent({ data }) { 

    console.log(data);
    // propTypes.data; {
        // console.log(data);

    // }

    return ( 
        <> 
        <h1 className="featured-items-main-header">Featured Items</h1>

        <div className="product-img-container-styles"> 
       {data.map((item) => { 
        // console.log(item);
        return ( 
            <img src={item.image} key={item.id} className="product-img-styles" alt="product-images"></img>
            
            
        )
       })}

            </div>

        
    {/* <img src={data} className="main-img"></img> */}
        
        
        
        </>
    )
}

MainComponent.propTypes = { 
    data: PropTypes.array,
}