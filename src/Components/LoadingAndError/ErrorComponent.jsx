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


