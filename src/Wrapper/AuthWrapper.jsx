import React from 'react';
import { Outlet } from 'react-router-dom';
// import img from "../../assets/images/Login_image.svg"
const AuthWrapper = (props) => {
  return (
    <>
      <div className='w-full flex items-center' >
        <div className='w-full  md:w-1/2 bg-gradient-to-r from-[#5C258D] to-[#4389A2]' >
          {/* outlet basically lets us use children in nested routing */}
          <Outlet />
        </div>
        <div className='hidden md:block w-2/3 h-screen' >
          {/* <img src={img} alt="wrapper" className='w-full h-full' /> */}
        </div>
      </div>
    </>
  );
}

export default AuthWrapper;
