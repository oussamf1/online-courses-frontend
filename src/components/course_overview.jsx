import { useState } from "react";
import { useEffect } from "react";
import { getCourse } from "../API/courses";
import { Link, useParams } from "react-router-dom";

export default function CourseOverview() {
  const [course, setCourse] = useState({});
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getCourse(id);
        const { course } = data;
        console.log(course);
        setCourse(course);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {course.title}
            </h1>
          </div>
          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {course.price}USD
            </p>
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                src={course.url}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{course.description}</p>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex justify-center my-12">
                <Link to={`/checkout/${course._id}`}>
                  <button
                    type="submit"
                    className=" my-5 w-48 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Purchase{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
