import React from 'react'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div style={{width:"100%", height:"100vh", background:"red", display:"flex"}}>
        <div style={{width:"30%", height:"100%", background:"blue"}}>
            <h1>
            sidebar
                </h1>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Sidebar;