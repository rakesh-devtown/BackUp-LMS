import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'

function ViewMore() {
  return (
    <div
    
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            backgroundColor: "white",
            borderRadius: "25px",
            border: "1px solid #005AB3",
            cursor: "pointer",
            marginTop: "20px",
            alignSelf: "center",
            color: "#005AB3",
            fontWeight: "400",
            fontSize: "16px",
        }}
    >
        View More Reviews <ArrowRightOutlined/>
    </div>
  )
}

export default ViewMore