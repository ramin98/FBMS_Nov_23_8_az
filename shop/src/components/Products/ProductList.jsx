import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { getProducts } from "../../reducers/products/reducerProductsFetchs";
import ProductItem from "./ProductItem";

function ProductList() {
    let {productsState, productsDispatch} = useContext(MyContext)

    useEffect(() => {
        getProducts(productsDispatch)
    }, [])
 
    return (
      <ul>
        {productsState.products.map((item) => <ProductItem key={item.id} {...item}/>)}
      </ul>
    );
  }
  
  export default ProductList;
  