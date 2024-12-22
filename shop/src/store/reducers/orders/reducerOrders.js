export let initialObjectOrders = {
  orders: [],
};

export function reducerOrders(state  = initialObjectOrders, action) {
  if (action.type === "GET ORDERS") {
    return { ...state, orders: action.payload };
  }
  return state;
}
