import axios from "axios";
import { backEndURl } from "./constant";
export async function getCourses() {
  try {
    const courses = await axios.get(`${backEndURl}courses/getAll`, {
      withCredentials: true,
    });
    return courses;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
export async function addCourse(data) {
  axios.post(`${backEndURl}courses/add`, data);
}
