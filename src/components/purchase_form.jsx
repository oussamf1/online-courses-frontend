import { LockClosedIcon } from "@heroicons/react/20/solid";
import { set, useForm } from "react-hook-form";
import { login } from "../API/users";
import { useNavigate, useParams } from "react-router-dom";
import { getCoursesAvailability } from "../API/availability";
import { useEffect, useState } from "react";
import { addOrder } from "../API/order";

export default function PurchaseForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [availabilities, setAvailabilities] = useState([]);

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        console.log(id);
        const { dateAndTutor } = await getCoursesAvailability(id);
        console.log(dateAndTutor);
        setAvailabilities(dateAndTutor);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchData();
  }, []);
  const onSubmit = async (data) => {
    const course_id = id;
    const availability = data.availability.split(",");
    const course_date = availability[0];
    const course_tutor = availability[1];
    const { studentName, numberOfClasses } = data;
    const response = await addOrder(
      course_id,
      course_date,
      course_tutor,
      studentName,
      numberOfClasses
    );
    if (response.data.success) {
      alert("Order Created");
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Student Name
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  type="studentName"
                  autoComplete="studentName"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Student Name"
                  {...register("studentName", {
                    required: "Please enter the student Name .",
                  })}
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="numberOfClasses" className="sr-only">
                  numberOfClasses{" "}
                </label>
                <select
                  id="numberOfClasses"
                  name="numberOfClasses"
                  type="numberOfClasses"
                  autoComplete="numberOfClasses"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="numberOfClasses"
                  {...register("numberOfClasses", {
                    required: "Please enter the number Of classes",
                  })}
                >
                  <option value="8">8</option>
                  <option value="16">16</option>{" "}
                </select>
              </div>
              <br></br>
              <div>
                <select
                  id="availability"
                  name="availability"
                  type="availability"
                  autoComplete="availability"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="availability"
                  {...register("availability", {
                    required: "Please select a date",
                  })}
                >
                  {availabilities.map((av, index) => (
                    <option>
                      {av.d.day}-{av.d.time},{av.tutor}
                    </option>
                  ))}
                </select>
              </div>
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
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
