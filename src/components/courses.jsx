import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { backEndURl } from "../API/constant";
import { getCourses } from "../API/courses";
export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getCourses();
        const { courses } = data;
        setCourses(courses);
        console.log(courses);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {courses.map((course) => (
            <div key={course.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={course.url}
                  alt={course.description}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`course/${course._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {course.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{course.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {course.price}USD
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
