import { useState, useEffect } from "react";
import { deleteTutor, getTutors } from "../API/availability";
export default function Tutors() {
  const [tutors, setTutors] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const DeleteTutor = async (id) => {
    const response = await deleteTutor(id);
    const { message } = response;
    const { data } = await getTutors();
    const { tutors } = data;
    setTutors(tutors);
    console.log(message);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getTutors();
        const { tutors } = data;
        setTutors(tutors);
        setIsFetched(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2">
          <div className="flex items-center space-x-2"></div>
        </div>
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tutors.map((tutor) => (
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {tutor.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        onClick={() => DeleteTutor(tutor._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
