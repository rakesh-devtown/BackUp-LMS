import { notification } from "antd";
import axios from "axios";
import useAuthStore from "../store/authStore";

// const SERVICE_URL = "https://j66d85vpbf.execute-api.ap-south-1.amazonaws.com"
const SERVICE_URL = "https://5f1iot5725.execute-api.ap-south-1.amazonaws.com";
// const TEST_MODE = window.location.href.includes("localhost")? true : false;
const TEST_MODE = false;
if (TEST_MODE) {
  notification.info({
    message: "Test mode Active !!",
    description: "Test mode Active !!",
    placement: "bottomRight",
    duration: 5,
    style: {
      backgroundColor: "#f6ffed",
      border: "1px solid #b7eb8f",
    },
  });
}

export const servicePost = async (path, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${
          !TEST_MODE
            ? `${SERVICE_URL}/${path}`
            : path.split("/").shift() === "student"
            ? `http://localhost:8083${path.slice(7)}`
            : `http://localhost:8080${path.slice(4)}`
        }`,
        payload,
        {
          headers: headers,
        }
      )
      .then(async function (response) {
        if(response?.data?.message==='Unauthorized Access' || response?.data?.message==='Invalid Session'){
          notification.error({
            message: "Error",
            description: "Unauthorized Access",
          });
          await useAuthStore.getState().logout();
        }
        else resolve(response.data);
      })
      .catch(async function (error) {
        reject(error);
        if(error.response.status===403){
          notification.error({
            message: "Error",
            description: "Session Expired",
          });
          await useAuthStore.getState().logout();
        }

      });
  });
};

export const serviceGet = async (path, headers) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${
          !TEST_MODE
            ? `${SERVICE_URL}/${path}`
            : path.split("/").shift() === "student"
            ? `http://localhost:8083${path.slice(7)}`
            : `http://localhost:8080${path.slice(4)}`
        }`,
        {
          headers: headers,
        }
      )
      .then(async function (response) {
        if(response?.data?.message==='Unauthorized Access' || response?.data?.message==='Invalid Session'){
          notification.error({
            message: "Error",
            description: "Session Expired",
          });
          await useAuthStore.getState().logout();
        }
        else resolve(response.data);
      })
      .catch(async function (error) {
        reject(error);
        if(error.response.status===403){
          notification.error({
            message: "Error",
            description: "Session Expired",
          });
          await useAuthStore.getState().logout();
        }
      });
  });
};

export const servicePut = async (path, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    axios
      .put(
        `${
          !TEST_MODE
            ? `${SERVICE_URL}/${path}`
            : path.split("/").shift() === "student"
            ? `http://localhost:8083${path.slice(7)}`
            : `http://localhost:8080${path.slice(4)}`
        }`,
        payload,
        {
          headers: headers,
        }
      )
      .then(async function (response) {
        if(response?.data?.message==='Unauthorized Access' || response?.data?.message==='Invalid Session'){
          notification.error({
            message: "Error",
            description: "Unauthorized Access",
          });
          await useAuthStore.getState().logout();
        }
        else resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const serviceDelete = async (path, headers) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `${
          !TEST_MODE
            ? `${SERVICE_URL}/${path}`
            : path.split("/").shift() === "student"
            ? `http://localhost:8083${path.slice(7)}`
            : `http://localhost:8080${path.slice(4)}`
        }`,
        {
          headers: headers,
        }
      )
      .then(async function (response) {
        if(response?.data?.message==='Unauthorized Access' || response?.data?.message==='Invalid Session'){
          notification.error({
            message: "Error",
            description: "Unauthorized Access",
          });
          await useAuthStore.getState().logout();
        }
        else resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
export const serviceGetWithCustomResponse = async (
  path,
  headers,
  responseType
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${
          !TEST_MODE
            ? `${SERVICE_URL}/${path}`
            : path.split("/").shift() === "student"
            ? `http://localhost:8083${path.slice(7)}`
            : `http://localhost:8080${path.slice(4)}`
        }`,
        {
          headers: headers,
          ...responseType,
        }
      )
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
