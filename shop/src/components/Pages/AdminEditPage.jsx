import { Link } from "react-router-dom";
import EditProductList from "../Admin/EditProductsList";
import AddForm from "../Admin/AddForm";
import { useContext } from "react";
import { MyContext } from "../../App";

function AdminEditPage() {
  let {adminDispatch} = useContext(MyContext)
  return (
    <section>
      <h1>Admin Edit Page</h1>
      <Link to='/admin'>ADMIN</Link>
      <button onClick={() => adminDispatch({type:'DELETE ALL'})}>DELETE ALL</button>
      <AddForm/>
      <EditProductList/>
    </section>
  );
}

export default AdminEditPage;
