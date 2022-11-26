import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { addTutor } from "../API/availability";

export default function TutorForm({ setNotification }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (tutor) => {
    console.log(tutor);
    const data = await addTutor(tutor);
    const { message } = data;
    setNotification(message);
  };
  return (
    <>
      <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="name"
              {...register("name", {
                required: "Please enter the tutor name",
              })}
            />
          </div>
          <br></br>

          <div>
            <label htmlFor="email" className="sr-only">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="email"
              {...register("email", {
                required: "Please enter the tutor email ",
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
