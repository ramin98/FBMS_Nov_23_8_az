import { useContext } from "react";
import ProductList from "../Products/ProductList";
import { MyContext } from "../../App";

function ProductsPage() {

    let {productsDispatch} = useContext(MyContext)
  return (
    <section>
      <h1>Products Page</h1>
      <select onChange={(ev) => productsDispatch({type:'PRODUCTS SORTING', payload: ev.target.value})}>
        <option value="INCREASE">INCREASE</option>
        <option value="DECREASE">DECREASE</option>
      </select>
      <ProductList/>
    </section>
  );
}

export default ProductsPage;
