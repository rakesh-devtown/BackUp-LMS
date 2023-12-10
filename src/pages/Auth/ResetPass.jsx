import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";
import styled from "styled-components";
import useAuthStore from "../../store/authStore";
console.log(useAuthStore.resetPassword());
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 12px;
`;

const Card = styled.div`
  max-width: 400px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  width: 100%;
`;

export default function ResetPass() {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const { resetPassword } = useAuthStore(); // Assuming you have a resetPassword action in your Zustand store

  const handleSubmit = (values) => {
    if (values.password === values.confirmPassword) {
      resetPassword(values, token, () => navigate("/"));
    } else {
      message.error("password mismatch");
    }
  };

  return (
    <Container>
      <Card>
        <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
          Enter New Password !
        </h2>
        <Form onFinish={handleSubmit}>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your new password!' }]}>
            <Input.Password
              placeholder="New Password"
              iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please confirm your new password!' }]}>
            <Input.Password
              placeholder="Confirm New Password"
              iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}
// import { useNavigate, useParams } from "react-router-dom";
// import auth from "./RouteProtection/auth";
// import toast from "react-hot-toast";
// import { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import img from "../../assets/images/ICON.svg";
// import InputTextbox from "../../components/InputTextbox/InputTextbox";
// import Button from "../../components/Button/Button";

// export default function ForgetPass() {
//   const [showPass, setshowPass] = useState(false);//state used for managing if password needs to be show or not
//   const navigate = useNavigate();
//   const { token } = useParams(); //token is basically a unique digit number which is sent while the forgot password mail is sent within the url

//   //submiting the form
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form_data = new FormData(event.target);
//     let values = {};
//     form_data.forEach(function (value, key) {
//       values[key] = value;
//     });

//     if (values.password === values.confirmPassword)
//       auth.resetPassword(() => navigate("/"), values, token);
//     else toast.error("password mismatch");
//   };

//   return (
//     <>
//       <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md bg-white p-10 rounded-lg w-full space-y-8">
//           <div>
//             <img
//               className="mx-auto h-12 w-auto"
//               src={img}
//               alt="Workflow"
//             />
//             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//               Enter New Password !
//             </h2>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div className="mb-4">
//                 <div className="flex items-center bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 border border-gray-300">
//                   <InputTextbox
//                     id="password"
//                     name="password"
//                     type={!showPass ? "password" : "text"}
//                     autoComplete="current-password"
//                     required
//                     placeholder="New Password"
//                   />
//                   <div
//                     className="cursor-pointer px-2"
//                     onClick={() => {
//                       setshowPass(!showPass);
//                     }}
//                   >
//                     {showPass ? (
//                       <AiOutlineEye size="1.4rem" />
//                     ) : (
//                       <AiOutlineEyeInvisible size="1.4rem" />
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 border border-gray-300">
//                   <InputTextbox
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={!showPass ? "password" : "text"}
//                     autoComplete="current-password"
//                     required
//                     placeholder="Confirm New Password"
//                   />
//                   <div
//                     className="cursor-pointer px-2"
//                     onClick={() => {
//                       setshowPass(!showPass);
//                     }}
//                   >
//                     {showPass ? (
//                       <AiOutlineEye size="1.4rem" />
//                     ) : (
//                       <AiOutlineEyeInvisible size="1.4rem" />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <Button type="submit" children="Reset" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
