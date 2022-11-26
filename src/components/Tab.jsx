import { useState, useCallback } from "react";
import AvailabilityForm from "./add_tutor_availability";
import CourseForm from "./course_form";
import Tutors from "./tutors_list";
import TutorForm from "./tutor_form";
export default function Admin_Tabs() {
  const [showAddCourse, setShowCourse] = useState(false);
  const [showAddTutor, setshowAddTutor] = useState(false);
  const [showAddAvailability, setShowAddAvailability] = useState(false);
  const [showTutors, setShowTutors] = useState(false);
  const [notification, setNotification] = useState("");
  const activateAddCourse = () => {
    resetStatus();
    setShowCourse(true);
  };
  const activateAddTutor = () => {
    resetStatus();
    setshowAddTutor(true);
  };
  const activateAddAvailabilty = () => {
    resetStatus();
    setShowAddAvailability(true);
  };
  const activateShowTutors = () => {
    resetStatus();
    setShowTutors(true);
  };
  const resetStatus = () => {
    setshowAddTutor(false);
    setShowAddAvailability(false);
    setShowCourse(false);
    setShowTutors(false);
  };
  return (
    <div class="container mx-auto p-20">
      <div class="flex items-center justify-center ">
        <div class="flex flex-row space-x-10 ">
          <div>
            <div>
              <div>
                {" "}
                <div class="bg-white rounded-lg border border-gray-200 w-64 text-gray-900">
                  <button
                    aria-current="true"
                    type="button"
                    class="
        text-left
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
                    onClick={activateAddCourse}
                  >
                    Add course
                  </button>
                  <button
                    onClick={activateAddTutor}
                    type="button"
                    class="
        text-left
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
                  >
                    Add Tutor
                  </button>
                  <button
                    onClick={activateAddAvailabilty}
                    type="button"
                    class="
        text-left
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
                  >
                    add Tutor availability
                  </button>
                  <button
                    onClick={activateShowTutors}
                    type="button"
                    class="
        text-left
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
                  >
                    Tutors List
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {" "}
              {showAddCourse && (
                <CourseForm setNotification={setNotification} />
              )}{" "}
            </div>
            <div>
              {" "}
              {showAddTutor && (
                <TutorForm setNotification={setNotification} />
              )}{" "}
            </div>
            <div> {showTutors && <Tutors />} </div>
            <div>{showAddAvailability && <AvailabilityForm />}</div>
          </div>
        </div>{" "}
      </div>
      <div className="flex justify-center my-12">
        {notification.length && (
          <div
            class="w-48 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">{notification}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
