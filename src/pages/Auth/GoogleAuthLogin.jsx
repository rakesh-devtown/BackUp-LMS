import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleOneTapLogin,
  useGoogleLogin
} from "@react-oauth/google";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import useLoadingStore from "../../store/loadingStore";
export const GoogleAuthLogin = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const googleLogin = useAuthStore((state) => state.googleLogin);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const isGoogleAuthenticated = useAuthStore(
    (state) => state.isGoogleAuthenticated
  );
  const responseGoogle = (response) => {
    try {
      const userObject = jwt_decode(response.credential);
      console.log("User Object:", userObject);
      localStorage.setItem("user", JSON.stringify(userObject));
    } catch (error) {
      console.error("Error decoding Google user data:", error);
    }
  };


  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      onSignInSuccess(credentialResponse);
    },
    onError: () => {
      console.error("Login Failed");
    },
  });

  const onSignInSuccess = async (response) => {
    try {
      setLoading(true);
      responseGoogle(response);
      console.log("Google Login Response:", response);
      const credential = response.credential;
      console.log("Google Login Credential:", credential);
      await googleLogin(credential);
      setLoading(false);
      // dispatch(setLoadingFalse());
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const onSignInFailure = (error) => {
    console.error("Google Sign-In Error:", error);
    // Handle sign-in errors here
  };

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      responseGoogle(credentialResponse);
      // dispatch(setLoadingTrue());
      setLoading(true);
      await googleLogin(credentialResponse.credential);
      // dispatch(setLoadingFalse());
      setLoading(false);
    },
    onError: () => {
      console.error("Login Failed");
    },
  });

  useEffect(() => {
    if (isGoogleAuthenticated) navigate("/");
  }, [isGoogleAuthenticated, navigate]);

  return (
    <GoogleLogin
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="google-login-button"
        >
          Sign in with Google
        </button>
      )}
      width={375}
      onSuccess={onSignInSuccess}
      onFailure={onSignInFailure}
      cookiePolicy="single_host_origin"
      shape="rectangular"
    />
    
  );
};
