import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../../store/reducers/products/reducerProductsFetchs'

function ProductList() {

   let products = useSelector((state) => state.products.products)
   console.log(products)
   let dispatch = useDispatch()

    useEffect(() => {
        getProducts(dispatch)
    }, [])
 
    return (
      <ul>
        {products.map((item) => <ProductItem key={item.id} {...item}/>)}
      </ul>
    );
  }
  
  export default ProductList;
  