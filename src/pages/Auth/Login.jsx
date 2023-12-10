import React from "react";
import { message } from "antd";
import useAuthStore from '../../store/authStore.js'; // Adjust the path according to your project structure
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import img from "../../assets/images/ICON.svg"
// import InputTextbox from "../../components/InputTextbox/InputTextbox";
// import Button from "../../components/Button/Button";
import { GoogleAuthLogin } from "./GoogleAuthLogin";
import { Layout, Form } from "antd";
import {
  StyledLoginPage,
  StyledLoginForm,
  StyledFormContainer,
  StyledLogo,
  StyledHeading,
  StyledDevTown,
  StyledP,
  InputUsername,
  StyledPassword,
  ForgotPassword,
  StyledButton,
  StyledImg,
  CenteredButtonContainer,
} from "../../styles/LoginPage.styles.js";
import Config from "../../config.js"
import { GoogleOAuthProvider } from "@react-oauth/google";
import authStore from '../../store/authStore.js';
import { routeDefinitions } from "../../constants/routes.js";

const googleClientId = Config.googleClientId; // Access the client ID from the config

export default function Login() {
  const { login, googleLogin, loadUser, logout, clearSessions } = useAuthStore();
  const navigate = useNavigate();
  const setAuth = useAuthStore(state => state.setAuth);
  const clearAuth = useAuthStore(state => state.clearAuth);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const screenLimitReached = useAuthStore(state => state.screenLimitReached);
  const [loading, setLoading] = useState(false);

  //submit the form data
  // const handleSubmit = async (values) => {
  //   try {
  //     setLoading(true);
  //     const { email, password } = values;
  //     const response = await authStore.loginUser({
  //       email: email.toLowerCase(),
  //       password,
  //     });
  
  //     const { token, user } = response;
  
  //     if (!token || !user) {
  //       throw new Error('Invalid password');
  //     }
  
  //     setAuth(token, user);
  //     // ... rest of your code ...
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     toast.error('Invalid password');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const { email, password } = values;
      console.log(values);
      const response = await login({
        email: email.toLowerCase(),
        password,
      });
      // get cookie from response
    } catch (error) {
      message.error(
        error.response && error.response.data && error.response.data.message ? error.response.data.message : 'Something went wrong'
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  //navigate to main dashboard
  useEffect(() => {
    if (screenLimitReached) navigate(routeDefinitions.SessionLimit);
  }, [screenLimitReached, navigate])
  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate])

  const onFinish = (values) => {
    console.log("Username:", values.username);
    console.log("Password:", values.password);
    // Implement your login logic here
    navigate("/");
  };

  return (
    <Layout className="layout">
      <StyledLoginPage>
        <StyledFormContainer>
          <StyledLoginForm>
            <StyledLogo
              src="https://www.student-platform.devtown.in/static/media/ICON.a874e4deea467c4d46a5055eb58c4e7b.svg" // Replace with the path to your image file
              alt="Devtown Logo" // Provide a brief description of the image for accessibility
              style={{
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "3rem",
                marginLeft: "auto",
                maxWidth: "100%",
                marginRight: "auto",
              }}
            />
            <StyledHeading>Welcome back to</StyledHeading>
            <StyledDevTown>DevTown</StyledDevTown>
            <Form name="login-form" onFinish={handleSubmit}>
              <Form.Item name="form-text">
                <StyledP>
                  Login to your account to get back to your learning.
                </StyledP>
              </Form.Item>
              {/* Username input */}

              <Form.Item
                name="email"
                rules={[
                  {
                    type:"email",
                    required: true,
                    message: "Please enter your email!",
                  },
                ]}
               
              >
                <InputUsername placeholder="Username" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
    {
      required: true,
      message: "Please enter your password!",
    },
    {
      min: 8,
      message: "Password must be at least 8 characters long."
    },
  ]}
              >
                <StyledPassword placeholder="Password" type="password" />
              </Form.Item>

              <Form.Item>
              <Link to="/auth/forgot-password">
                <ForgotPassword> Forgot your password?</ForgotPassword>
                </Link>
              </Form.Item>

              <Form.Item>
                <StyledButton
                  type="primary"
                  htmlType="submit"
                  className="login-button"
                  children="Login"
                >
                  Log in
                </StyledButton>
                <CenteredButtonContainer>
                <GoogleOAuthProvider clientId={googleClientId }>
                  <GoogleAuthLogin />
                </GoogleOAuthProvider>
                </CenteredButtonContainer>

              </Form.Item>
            </Form>
          </StyledLoginForm>
        </StyledFormContainer>
        <StyledImg
          src="https://www.student-platform.devtown.in/static/media/Login_image.d23150f57543b9b841d955f9245b17ca.svg"
          alt="Login"
        />
      </StyledLoginPage>
    </Layout>
  );
}
// import React from "react";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../redux/features/auth/slice.js";
// import { setLoadingTrue, setLoadingFalse } from "../../redux/features/loading/slice";
// import { authState, screenLimitState } from "../../redux/features/auth/selectors/index.js";
// // import img from "../../assets/images/ICON.svg"
// // import InputTextbox from "../../components/InputTextbox/InputTextbox";
// // import Button from "../../components/Button/Button";
// import { GoogleAuthLogin } from "./GoogleAuthLogin.jsx";
// import { Layout, Form } from "antd";
// import {
//   StyledLoginPage,
//   StyledLoginForm,
//   StyledFormContainer,
//   StyledLogo,
//   StyledHeading,
//   StyledDevTown,
//   StyledP,
//   InputUsername,
//   StyledPassword,
//   ForgotPassword,
//   StyledButton,
//   StyledImg,
//   CenteredButtonContainer,
// } from "../../styles/LoginPage.styles.js";
// import Config from "../../config.js"
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const googleClientId = Config.googleClientId; // Access the client ID from the config

// export default function Login() {
//   // const [showPass, setshowPass] = useState(false) //state used for managing if password needs to be show or not
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   //submit the form data
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form_data = new FormData(event.target);
//     let values = {};
//     form_data.forEach(function (value, key) {
//       values[key] = value;
//     });
//     // dispatch for login
//     dispatch(setLoadingTrue())
//     await dispatch(login(values))
//     dispatch(setLoadingFalse())
//   }

//   const isAuthenticated = useSelector(authState)
//   const screenLimitReached = useSelector(screenLimitState);
//   //navigate to main dashboard
//   useEffect(() => {
//     if (screenLimitReached) navigate('/session/limit');
//   }, [screenLimitReached, navigate])
//   useEffect(() => {
//     if (isAuthenticated) navigate('/');
//   }, [isAuthenticated, navigate])

//   const onFinish = (values) => {
//     console.log("Username:", values.username);
//     console.log("Password:", values.password);
//     // Implement your login logic here
//     navigate("/");
//   };

//   return (
//     <Layout className="layout">
//       <StyledLoginPage>
//         <StyledFormContainer>
//           <StyledLoginForm>
//             <StyledLogo
//               src="https://www.student-platform.devtown.in/static/media/ICON.a874e4deea467c4d46a5055eb58c4e7b.svg" // Replace with the path to your image file
//               alt="Devtown Logo" // Provide a brief description of the image for accessibility
//               style={{
//                 display: "block",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "auto",
//                 height: "3rem",
//                 marginLeft: "auto",
//                 maxWidth: "100%",
//                 marginRight: "auto",
//               }}
//             />
//             <StyledHeading>Welcome back to</StyledHeading>
//             <StyledDevTown>DevTown</StyledDevTown>
//             <Form name="login-form" onFinish={onFinish}>
//               <Form.Item name="form-text">
//                 <StyledP>
//                   Login to your account to get back to your learning.
//                 </StyledP>
//               </Form.Item>
//               {/* Username input */}

//               <Form.Item
//                 name="username"
//                 rules={[
//                   {
//                     type:"email",
//                     required: true,
//                     message: "Please enter your email!",
//                   },
//                 ]}
//                 onSubmit={handleSubmit}
//               >
//                 <InputUsername placeholder="Username" />
//               </Form.Item>

//               <Form.Item
//                 name="password"
//                 rules={[
//     {
//       required: true,
//       message: "Please enter your password!",
//     },
//     {
//       min: 8,
//       message: "Password must be at least 8 characters long."
//     },
//   ]}
//               >
//                 <StyledPassword placeholder="Password" type="password" />
//               </Form.Item>

//               <Form.Item>
//               <Link to="/auth/forgot-password">
//                 <ForgotPassword> Forgot your password?</ForgotPassword>
//                 </Link>
//               </Form.Item>

//               <Form.Item>
//                 <StyledButton
//                   type="primary"
//                   htmlType="submit"
//                   className="login-button"
//                   children="Login"
//                 >
//                   Log in
//                 </StyledButton>
//                 <CenteredButtonContainer>
//                 <GoogleOAuthProvider clientId={googleClientId }>
//                   <GoogleAuthLogin />
//                 </GoogleOAuthProvider>
//                 </CenteredButtonContainer>

//               </Form.Item>
//             </Form>
//           </StyledLoginForm>
//         </StyledFormContainer>
//         <StyledImg
//           src="https://www.student-platform.devtown.in/static/media/Login_image.d23150f57543b9b841d955f9245b17ca.svg"
//           alt="Login"
//         />
//       </StyledLoginPage>
//     </Layout>
//   );
// }