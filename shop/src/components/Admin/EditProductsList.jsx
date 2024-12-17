import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { getProducts } from "../../reducers/products/reducerProductsFetchs";
import EditProductItem from "./EditProductsItem";

function EditProductList() {
    let {adminState, adminDispatch} = useContext(MyContext)

    useEffect(() => {
        getProducts(adminDispatch)
    }, [])
 
    return (
      <ul>
        {adminState.admin_products.map((item) => <EditProductItem key={item.id} {...item}/>)}
      </ul>
    );
  }
  
  export default EditProductList;
  