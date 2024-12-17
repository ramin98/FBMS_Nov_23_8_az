import { useContext } from "react";
import { MyContext } from "../../App";

function ProductItem(props) {

  let { bagDispatch } = useContext(MyContext);

  return (
    <li>
      <p>{props.product_name}</p>
      <p>{props.product_description}</p>
      <p>{props.product_price}</p>
      <img src={props.url} alt={props.product_name} />
      <button onClick={() => bagDispatch({type:'ADD TO BAG', payload: props})}>ADD TO BAG</button>
    </li>
  );
}

export default ProductItem;
