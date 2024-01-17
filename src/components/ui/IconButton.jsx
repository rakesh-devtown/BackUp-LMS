import React from 'react'

const IconButton = ({ children, ...props }) => {
    return (
        <button
        {...props}
        style={{ width: "100%", display: "flex", alignItems: "center" , backgroundColor: "transparent" , border : "none", marginRight:"40px"  ,cursor : "pointer"}}
      >
        
        {children}
      </button>
    )
}

export default IconButton