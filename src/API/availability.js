import axios from "axios";
import { backEndURl } from "./constant";

export async function addTutor(data) {
  axios.post(`${backEndURl}availability/add`, data);
}
export async function getTutors() {
  try {
    const tutors = axios.get(`${backEndURl}availability/getTutors`, {
      withCredentials: true,
    });
    return tutors;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
