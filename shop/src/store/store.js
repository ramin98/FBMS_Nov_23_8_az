import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducerProdcuts } from "./reducers/products/reducerProducts";
import { reducerBag } from "./reducers/bag/reducerBag";
import { reducerOrders } from "./reducers/orders/reducerOrders";
import { reducerAdmin } from "./reducers/admin/reducerAdmin";
import { thunk } from "redux-thunk";


let reducers = combineReducers({
    products: reducerProdcuts,
    bag: reducerBag,
    orders: reducerOrders,
    admin: reducerAdmin,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store