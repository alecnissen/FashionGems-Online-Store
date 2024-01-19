import React from 'react'
import PropTypes from "prop-types"

export default function ErrorComponent({ error }) {
  console.log(typeof error)
  return (
    <div>
      {error}
    </div>
  )
}

ErrorComponent.propTypes = { 
  error: PropTypes.string
}


// CheckoutComponent.propTypes = { 
//   cartItems: PropTypes.array,
//   setCartItems: PropTypes.func,
//   newCartItems: PropTypes.number,
//   itemQuantity: PropTypes.array,
//   setItemQuantity: PropTypes.func,
//   isOpen: PropTypes.bool,
//   setIsOpen: PropTypes.func,
// }
