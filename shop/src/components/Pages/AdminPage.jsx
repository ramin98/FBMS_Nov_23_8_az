import { Link } from "react-router-dom";
import OrderList from "../Admin/OrderList";

function AdminPage() {
  return (
    <section>
      <h1>Admin Page ORDERS</h1>
      <Link to='/admin-edit'>ADMIN EDIT</Link>
      <OrderList/>
    </section>
  );
}

export default AdminPage;
