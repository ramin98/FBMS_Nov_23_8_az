import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { getOrders } from "../../reducers/orders/orderFetchs";
import OrderItem from "./OrderItem";

function OrderList() {
    let {orderState, orderDispatch} = useContext(MyContext)

    useEffect(() => {
        getOrders(orderDispatch)
    }, [])
 
    return (
      <ul>
        {orderState.orders.map((item) => <OrderItem key={item.id} {...item}/>)}
      </ul>
    );
  }
  
  export default OrderList;
  