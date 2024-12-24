import { useContext } from "react";
import { MyContext } from "../../App";

function OrderForm() {
  let { bagState, bagDispatch } = useContext(MyContext);

  function handleOrderForm (ev) {
    ev.preventDefault()
    let formData = Object.fromEntries([...new FormData(ev.target)])
    bagDispatch({type:'ORDER', payload: formData})
  }

  return (
    <div>
      <h1>Order Form</h1>
      <form onSubmit={handleOrderForm}>
        <input type="text" name="customer_name" placeholder="customer name" />
        <input type="text" name="customer_email" placeholder="customer email" />
        <input
          type="text"
          name="customer_address"
          placeholder="customer address"
        />
        <input
          type="text"
          name="customer_number"
          placeholder="customer number"
        />
        <button>ORDER</button>
      </form>
      <p>
        {bagState.bag.reduce((total, price) => total + price.total_price, 0)}
      </p>
    </div>
  );
}

export default OrderForm;
