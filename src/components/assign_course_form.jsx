import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useForm } from "react-hook-form";
import { backEndURl } from "../API/constant";
import { getCourses } from "../API/courses";
import { useState, useEffect } from "react";
import { assignCourse, getTutors } from "../API/availability";

export default function AssignCourse({ setNotification }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const [tutors, setTutors] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchTutors() {
      try {
        const { data } = await getTutors();
        const { tutors } = data;
        setTutors(tutors);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    async function fetchCourses() {
      try {
        const { data } = await getCourses();
        const { courses } = data;
        console.log(courses);
        setCourses(courses);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchTutors();
    fetchCourses();
  }, []);
  const onSubmit = async (formData) => {
    const { course, tutor } = formData;
    console.log(course);
    console.log(tutor);
    const { message } = await assignCourse(course, tutor);
    setNotification(message);
  };

  return (
    <>
      <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="course" className="sr-only">
              Course{" "}
            </label>
            <select
              id="course"
              name="course"
              type="course"
              autoComplete="course"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="course"
              {...register("course", {
                required: "Please enter the Course",
              })}
            >
              {courses.map((course) => (
                <option value={course.title}>{course.title}</option>
              ))}
            </select>
          </div>
          <br></br>
          <div>
            <label htmlFor="tutor" className="sr-only">
              Tutor{" "}
            </label>
            <select
              id="tutor"
              name="tutor"
              type="tutor"
              autoComplete="tutor"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="tutor"
              {...register("tutor", {
                required: "Please enter the tutor name",
              })}
            >
              {tutors.map((tutor) => (
                <option value={tutor.name}>{tutor.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <br></br>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
