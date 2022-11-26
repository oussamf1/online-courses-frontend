import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useForm } from "react-hook-form";
import { backEndURl } from "../API/constant";

export default function CourseForm({ setNotification }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (course) => {
    const { data } = await axios.post(`${backEndURl}courses/add`, course);
    const { message } = data;
    setNotification(message);
  };

  return (
    <>
      <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="title" className="sr-only">
              Course Title
            </label>
            <input
              id="title"
              name="title"
              type="title"
              autoComplete="title"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Title"
              {...register("title", {
                required: "Please enter the course title",
              })}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="description" className="sr-only">
              Course Description
            </label>
            <input
              id="description"
              name="description"
              type="description"
              autoComplete="description"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Description"
              {...register("description", {
                required: "Please enter the course description",
              })}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="url" className="sr-only">
              Image Url
            </label>
            <input
              id="url"
              name="url"
              type="url"
              autoComplete="url"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="url"
              {...register("url", {
                required: "Please enter the image url",
              })}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="price" className="sr-only">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="price"
              autoComplete="price"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Price"
              {...register("price", {
                required: "Please enter your email address.",
              })}
            />
          </div>
          <br></br>
        </div>
        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Save
          </button>
        </div>
      </form>
    </>
  );
}
