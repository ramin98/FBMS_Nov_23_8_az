import { Link } from "react-router-dom";
import EditProductList from "../Admin/EditProductsList";
import AddForm from "../Admin/AddForm";

function AdminEditPage() {
  return (
    <section>
      <h1>Admin Edit Page</h1>
      <Link to='/admin'>ADMIN</Link>
      <AddForm/>
      <EditProductList/>
    </section>
  );
}

export default AdminEditPage;
