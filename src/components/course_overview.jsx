import { useState, useParams } from "react";
import { useEffect } from "react";
import { getCourse } from "../API/courses";
import { useSearchParams } from "react-router-dom";

export default function CourseOverview() {
  const [course, setCourse] = useState({});
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getCourse("id");
        const { courses } = data;
        setCourse(courses);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchData();
  }, []);

  return (
    <h1>sddas</h1>
    // <div className="bg-white">
    //   <div className="pt-6">
    //     {/* Product info */}
    //     <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
    //       <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    //         <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
    //           {course.title}
    //         </h1>
    //       </div>
    //       {/* Options */}
    //       <div className="mt-4 lg:row-span-3 lg:mt-0">
    //         <h2 className="sr-only">Product information</h2>
    //         <p className="text-3xl tracking-tight text-gray-900">
    //           {course.price}
    //         </p>
    //         <img
    //           src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
    //           className="object-contain  object-center"
    //         />
    //       </div>

    //       <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
    //         {/* Description and details */}
    //         <div>
    //           <h3 className="sr-only">Description</h3>

    //           <div className="space-y-6">
    //             <p className="text-base text-gray-900">{course.description}</p>
    //           </div>
    //         </div>
    //         <div className="mt-10">
    //           <div className="flex justify-center my-12">
    //             <button
    //               type="submit"
    //               className=" my-5 w-48 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //             >
    //               Purchase{" "}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
