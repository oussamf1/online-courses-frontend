import { useState } from "react";
import AvailabilityForm from "./add_tutor_availability";
import CourseForm from "./course_form";
import TutorForm from "./tutor_form";
export default function Admin_Tabs() {
  const [showAddCourse, setShowCourse] = useState(false);
  const [showAddTutor, setshowAddTutor] = useState(false);
  const [showAddAvailability, setShowAddAvailability] = useState(false);

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
  const resetStatus = () => {
    setshowAddTutor(false);
    setShowAddAvailability(false);
    setShowCourse(false);
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
                    A fourth link item
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div> {showAddCourse && <CourseForm></CourseForm>} </div>
            <div> {showAddTutor && <TutorForm></TutorForm>} </div>
            <div>
              {showAddAvailability && <AvailabilityForm></AvailabilityForm>}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
