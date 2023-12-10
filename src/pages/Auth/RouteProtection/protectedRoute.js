import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../../store/authStore";  // adjust the path as needed

export const ProtectedRoute = (props) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated); //check if the user is authenticated
  const isGoogleAuthenticated = useAuthStore(state => state.isGoogleAuthenticated);
  const ready = useAuthStore(state => state.isReady); //check if the user is ready

  if (ready) {
    if (isAuthenticated || isGoogleAuthenticated) {
      return props.children; //check the children
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
  } else {
    return null;
  }
};