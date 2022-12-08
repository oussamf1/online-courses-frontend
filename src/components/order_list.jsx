import { useState, useEffect } from "react";
import { getAllOrders, getOrders } from "../API/order";
import { checkIsAdmin } from "../API/users";
export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchIsAdmin() {
      try {
        const { data } = await checkIsAdmin();
        const { isAdmin } = data;
        console.log(isAdmin);
        setIsAdmin(isAdmin);
      } catch (error) {
        console.log(error);
      }
    }
    async function fetchOrders() {
      try {
        if (isAdmin) {
          const { data } = await getAllOrders();
          const { orders } = data;
          setOrders(orders);
        } else {
          const { data } = await getOrders();
          const { orders } = data;
          setOrders(orders);
        }
        console.log(orders);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchOrders();
    fetchIsAdmin();
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
                    Student Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Course
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Final Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-left">
                      {order.studentName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-left">
                      {order.user_email}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-left">
                      {order.course}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-left">
                      {order.courseDate}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-right">
                      {order.finalPrice}
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
