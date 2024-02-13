import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore';
import useLoadingStore from '../store/loadingStore';

function MainWrapper(  { children }) {
    const loadUser = useAuthStore((state) => state.loadUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();
  const navigate = useNavigate();
  const isGoogleAuthenticated= useAuthStore(state => state.isGoogleAuthenticated)
  const setLoading = useLoadingStore((state) => state.setLoading);
  
  
    if (isAuthenticated  || isGoogleAuthenticated) {
      return children;
    } else {
      return (
        <Navigate
          replace
          to={{
            pathname: "/auth",
          }}
        />
      );
    }
  
}

export default MainWrapper