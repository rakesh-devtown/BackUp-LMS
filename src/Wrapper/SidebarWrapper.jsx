
// not used
// import React, { useContext, useEffect, useMemo, useState } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";
// import MobileSidebar from "../../Layout/Sidebar/mobileSidebar";
// import Sidebar from "../../Layout/Sidebar/Sidebar";
// import Profile from "../../pages/Profile/Profile";
// import { profileState } from "../../redux/features/auth/selectors";

// const SidebarWrapper = () => {
//   const [width, setwidth] = useState(window.innerWidth);
//   window.onresize = () => { setwidth(window.innerWidth) };

//   const profile = useSelector(profileState);

//   return (
//     <>

//       <div className="w-full flex min-h-screen h-full ">
//         {width >= 1000 && <div className="w-[110px] min-h-screen bg-sidebar  hidden  sidebar:block fixed h-screen      ">
//           <div className="sticky top-0">
//             <Sidebar />
//           </div>
//         </div>}
//         {width < 1000 && <div className="flex flex-col items-center justify-center sidebar:hidden min-h-screen py-2 ">
//           <MobileSidebar />
//         </div>}
//         <div className="w-full bg-white sidebar:w-[90%] ml-auto md:py-8  md:px-12 p-4">
//           {
//             (profile?.profileComplete) ?
//               <Outlet />
//               :
//               <>
//                 <Profile />
//               </>
//           }
//         </div>
//       </div>

//     </>
//   );
// };

// export default SidebarWrapper;
