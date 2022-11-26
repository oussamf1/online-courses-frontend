import axios from "axios";
import { backEndURl } from "./constant";

export async function addTutor(tutor) {
  const { data } = await axios.post(`${backEndURl}availability/add`, tutor);
  return data;
}
export async function deleteTutor(tutor_id) {
  const { data } = await axios.post(`${backEndURl}availability/delete`, {
    id: tutor_id,
  });
  return data;
}
export async function getTutors() {
  try {
    const tutors = await axios.get(`${backEndURl}availability/getTutors`, {
      withCredentials: true,
    });
    return tutors;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
export async function addDate(availability) {
  const { data } = await axios.post(
    `${backEndURl}availability/addDate`,
    availability
  );
  return data;
}
