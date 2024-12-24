import { useDispatch } from "react-redux";
import ProductList from "../Products/ProductList";
import { productsSorting } from "../../store/reducers/products/reducerProducts";

function ProductsPage() {

  let dispatch = useDispatch()

  return (
    <section>
      <h1>Products Page</h1>
      <select onChange={(ev) => dispatch(productsSorting(ev.target.value))}>
        <option value="INCREASE">INCREASE</option>
        <option value="DECREASE">DECREASE</option>
      </select>
      <ProductList/>
    </section>
  );
}

export default ProductsPage;
