import { orderFetch } from "./bagFetchs";

export let initialObjectBag = {
  bag: [],
};

export function reducerBag(state, action) {
  let storageBag = JSON.parse(localStorage.getItem("bag"));

  if (action.type === "ADD TO BAG") {
    let product = { ...action.payload };
    if (!storageBag.some((item) => item.id === product.id)) {
      product.count = 1;
      product.total_price = product.count * product.product_price;
      storageBag.push(product);
      localStorage.setItem("bag", JSON.stringify(storageBag));
    }
  } else if (action.type === "GET BAG") {
    return { ...state, bag: storageBag };
  } else if (action.type === "DELETE") {
    let index = storageBag.findIndex((item) => item.id === action.payload);
    storageBag.splice(index, 1);
    localStorage.setItem("bag", JSON.stringify(storageBag));
    return { ...state, bag: storageBag };
  } else if (action.type === "MINUS") {
    let index = storageBag.findIndex((item) => item.id === action.payload);

    storageBag[index].count -= 1;

    if (storageBag[index].count < 1) {
      storageBag.splice(index, 1);
    } else {
      storageBag[index].total_price =
        storageBag[index].count * storageBag[index].product_price;
    }

    localStorage.setItem("bag", JSON.stringify(storageBag));
    return { ...state, bag: storageBag };
  } else if (action.type === "PLUS") {
    let index = storageBag.findIndex((item) => item.id === action.payload);

    storageBag[index].count += 1;
    storageBag[index].total_price =
      storageBag[index].count * storageBag[index].product_price;

    localStorage.setItem("bag", JSON.stringify(storageBag));
    return { ...state, bag: storageBag };
  } else if (action.type === "ORDER") {
    let order = { ...action.payload };
    order.customer_bag = storageBag;
    order.products_sum = state.bag.reduce((total, price) => total + price.total_price, 0)
    orderFetch(order);

    localStorage.setItem("bag", JSON.stringify([]));
    return { ...state, bag: [] };
  }

  return state;
}
