// not used
// import React, { useEffect } from 'react'
// import { Outlet, useLocation, useNavigate } from 'react-router-dom'
// import useAuthStore from '../store/authStore';
// import useLoadingStore from '../store/loadingStore';

// function MainWrapper(  { children }) {
//     const loadUser = useAuthStore((state) => state.loadUser);
//   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const setLoading = useLoadingStore((state) => state.setLoading);
//   const verifyAuthToken = async () => {
//     try {
        
//         setLoading(true);
//         await loadUser();
//         if (!isAuthenticated) {
//             navigate("/auth");
//         }
//     } catch (error) {
        
//     }finally {

//         setLoading(false);
//     }
//   };
//   useEffect(() => {
//     verifyAuthToken();
//   }, []);
//   return (
//     <>
//        {
//            children
//        }
//     </>
//   )
// }

// export default MainWrapper