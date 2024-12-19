import { useContext, useState } from "react";
import { MyContext } from "../../App";
import EditForm from "./EditAdmin";

function EditProductItem(props) {

  let { adminDispatch } = useContext(MyContext);
  let [flag, setFlag]=  useState(false)

  return (
    <li>
      <p>{props.product_name}</p>
      <p>{props.product_description}</p>
      <p>{props.product_price}</p>
      <img src={props.url} alt={props.product_name} />
      <button onClick={() => adminDispatch({type:'DELETE', payload: props.id})}>DELETE</button>
      <button onClick={() => setFlag(!flag)}>SHOW EDIT FORM</button>
      <input type="checkbox" onChange={(ev) => adminDispatch({type:'CHOOSE ALL', payload: {id: props.id, checked: ev.target.checked}})}/>
      {flag && <EditForm productObj={props}/>}
    </li>
  );
}

export default EditProductItem;
