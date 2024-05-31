import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleOneTapLogin,
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
      localStorage.setItem("user", JSON.stringify(userObject));
    } catch (error) {
      console.error("Error decoding Google user data:", error);
    }
  };

  const onSignInSuccess = async (response) => {
    try {
      setLoading(true);
      responseGoogle(response);

      const credential = response.credential;

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
    if (isGoogleAuthenticated) navigate("/programs");
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
      width="100%"
      onSuccess={onSignInSuccess}
      onFailure={onSignInFailure}
      cookiePolicy="single_host_origin"
      isS
    />
  );
};
