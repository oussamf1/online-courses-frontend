import Admin_Tabs from "../components/Tab";
import { useEffect, useState } from "react";
import OrdersList from "../components/order_list";
import { checkIsAdmin } from "../API/users";
import { getOrders } from "../API/order";
export default function Dashboard_Page() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [orders, setOrders] = useState([]);

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
        const { data } = await getOrders();
        const { orders } = data;
        setOrders(orders);
        console.log(orders);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    fetchIsAdmin();
    fetchOrders();
  }, []);
  return (
    <div class="container mx-auto px-10">
      {isAdmin && <Admin_Tabs></Admin_Tabs>}{" "}
      {!isAdmin && <OrdersList></OrdersList>}{" "}
    </div>
  );
}
