import { useContext } from "react";
import { MyContext } from "../../App";

function BagItem(props) {
 
  let { bagDispatch } = useContext(MyContext);

  return (
    <li>
      <p>{props.product_name}</p>
      <p>{props.product_description}</p>
      <p>{props.product_price}</p>
      <img src={props.url} alt={props.product_name} />
      <button onClick={() => bagDispatch({type:'DELETE', payload: props.id})}>DELETE</button>
      <div>
      <button onClick={() => bagDispatch({type:'MINUS', payload: props.id})}>-</button>
      <p>{props.count}</p>
      <button onClick={() => bagDispatch({type:'PLUS', payload: props.id})}>+</button>
      </div>
    </li>
  );
  }
  
  export default BagItem;
  