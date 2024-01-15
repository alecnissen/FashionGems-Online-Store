import React from 'react'
import axios from 'axios'; 
import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom"


const MODAL_STYLES = { 
    position: 'fixed',
    top: '50%', 
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    height: "720px",
    width: "700px",
    overflow: "scroll",
}

const OVERLAY_STYLES = { 
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal( { isOpen, setIsOpen, children, onClose }) {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const filteredItems = data.filter(item => { 
        return item.title.toString().toLowerCase().includes(query.toLowerCase())
    }) 

    console.log(filteredItems); 


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



//   useEffect(() => { 
//   const closeModal = (e) => { 
//     setIsOpen(false);
//   }

//   document.body.addEventListener('click', closeModal);
// }, [])



  
    // const ref = useRef()
    // useEffect(() => {
    //   const checkIfClickedOutside = e => {
    //     if (ref.current && !ref.current.contains(e.target)) {
    //       onClose
    //     }
    //   }
    //   document.addEventListener("click", checkIfClickedOutside)
    //   return () => {
    //     document.removeEventListener("click", checkIfClickedOutside)
    //   }
    // }, [onClose])


 




  // document.body.addEventListener('click', onClose);


  console.log('logging data within Modal component', data);

  if (!isOpen) return null

  return (
    <> 
    <div style={OVERLAY_STYLES} onClick={onClose} />
    <div style={MODAL_STYLES}>
        <h6 className='modal-header-styles'>Search for Items</h6>
        <input value={query} onChange={(e) => { 
            // console.log(e.target.value);
            setQuery(e.target.value)
            console.log(query);
        }}></input>
        <button>Go</button>
    <button onClick={onClose}>X</button>
  

      {query !== "" && filteredItems.map((item) => { 
           return ( 
            <> 
            <Link to={`/ProductPage/${item.id}`} onClick={onClose}>
            <div className='filteredItems-styles' key={item.key}>{item.title}

            <img src={item.image} style={{ width: '4em' }}></img>

            <div>{item.price}</div>
            </div>
            </Link>
            </>
        )
      })}


      
    </div>
    </>
  )
}






        // return ( 
        //     <> 
        //     {/* <img src={item.title}></img> */}
        //     {/* <h6>{item.title}</h6> */}
        //     <div className='filteredItems-styles'>{item.title}
        //     <img src={item.image} style={{ width: '4em' }}></img>
        //     <div>{item.price}</div>
        //     </div>
        //     </>
        // )


