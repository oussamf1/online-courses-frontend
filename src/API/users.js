import axios from "axios";
import { backEndURl } from "./constant";
export async function login(email, password) {
  try {
    const response = await axios.post(
      `${backEndURl}users/sign-in`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
export async function sign_out() {
  try {
    const response = await axios.get(`${backEndURl}users/sign-out`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function sign_up(firstName, lastName, email, password) {
  try {
    const response = await axios.post(
      `${backEndURl}users/sign-up`,
      { firstName, lastName, email, password },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
export async function isAuth() {
  try {
    const response = await axios.get(`${backEndURl}users/isAuth`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function checkIsAdmin() {
  try {
    const response = await axios.get(`${backEndURl}users/isAdmin`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
