import { ArrowLeftOutlined } from '@ant-design/icons'
import React from 'react'

function BackButton() {
  return (
    <div   style={{
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        color: "#0859DE", 
        position : 'absolute',
        fontSize:"20px" ,
        top:10, 
        left:10
    }}    >
        <ArrowLeftOutlined/> Back 
    </div>
  )
}

export default BackButton