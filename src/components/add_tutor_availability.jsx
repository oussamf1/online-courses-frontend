import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getTutors } from "../API/availability";

export default function AvailabilityForm() {
  const [tutors, setTutors] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getTutors();
        console.log(data.tutors);
        setTutors(data.tutors);
        setIsFetched(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
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
              {isFetched &&
                tutors.map((tutor) => {
                  <option value={tutor.tutor}>{tutor.tutor}</option>;
                })}
            </select>
          </div>
          <br></br>
          <div>
            <label htmlFor="day" className="sr-only">
              Day
            </label>
            <input
              id="day"
              name="day"
              type="day"
              autoComplete="day"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="day"
              {...register("day", {
                required: "Please enter the Day",
              })}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="time" className="sr-only">
              Time
            </label>
            <input
              id="time"
              name="time"
              type="time"
              autoComplete="time"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="time"
              {...register("time", {
                required: "Please enter the course time.",
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
