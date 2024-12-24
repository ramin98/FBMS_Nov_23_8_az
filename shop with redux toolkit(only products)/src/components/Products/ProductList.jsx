import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {productsFetch} from '../../store/reducers/products/reducerProductsFetchs'

function ProductList() {

   let products = useSelector((state) => state.products.products)
   let loading = useSelector((state) => state.products.loading)
   let error = useSelector((state) => state.products.error)

   console.log(products)
   let dispatch = useDispatch()

    useEffect(() => {
      dispatch(productsFetch())
    }, [])

    if(loading){
      return <h1>LOADING...</h1>
    }

    if(error){
      return <h1>ERROR!!!</h1>
    }
 
    return (
      <ul>
        {products.map((item) => <ProductItem key={item.id} {...item}/>)}
      </ul>
    );
  }
  
  export default ProductList;
  