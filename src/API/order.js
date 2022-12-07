import axios from "axios";
import { backEndURl } from "./constant";
export async function addOrder(
  course_id,
  course_date,
  course_tutor,
  studentName,
  numberOfClasses
) {
  try {
    const response = await axios.post(
      `${backEndURl}order/create`,
      { course_id, course_date, course_tutor, studentName, numberOfClasses },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
export async function getOrders() {
  try {
    const orders = await axios.get(`${backEndURl}order/summary`, {
      withCredentials: true,
    });
    return orders;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
