import { GoogleOAuthProvider, GoogleLogin, useGoogleOneTapLogin} from '@react-oauth/google';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import useAuthStore from '../../store/authStore';
export const GoogleAuthLogin = () =>{
  const {googleLogin } = useAuthStore();
    const responseGoogle = async(response) => {
        console.log(response);
        const idToken=response.credential;
        //  const userObject = jwt_decode(response.credential);
         const userObject = jwt_decode(idToken);
         console.log(userObject);
         localStorage.setItem('user', JSON.stringify(userObject));
         const { name, sub, picture,email } = userObject;
         const doc = {
           _id: sub,
           _type: 'user',
           userName: name,
           image: picture,
           email:email,
         };
            console.log(doc)
            await googleLogin(idToken)
       }
    const onSignInSuccess = (response) => {
        console.log('Google Sign-In Success:', response);
        responseGoogle(response);
        // Handle the successful sign-in here
      };
    
      const onSignInFailure = (error) => {
        console.error('Google Sign-In Error:', error);
        // Handle sign-in errors here
      };
      useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
          console.log(credentialResponse);
          responseGoogle(credentialResponse);
        },
        onError: () => {
          console.log('Login Failed');
        },
      });

    return(
    <GoogleLogin 
    render={(renderProps) => (
      <button
        type="button"
        className=""
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}
      >
         Sign in with google
      </button>
    )}
    onSuccess={onSignInSuccess} onFailure={onSignInFailure} cookiePolicy="single_host_origin" />
)}





