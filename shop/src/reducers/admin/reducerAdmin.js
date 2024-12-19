import { addProductFetch } from "./adminFetchs";

export let initialObjectAdmin = {
    admin_products: [],
  };
  
  export function reducerAdmin(state, action) {
    if (action.type === "GET PRODUCTS") {
      return { ...state, admin_products: action.payload };     
    }else if(action.type === "ADD"){
        let newArr = [...state.admin_products]
        newArr.push(action.payload)
        return { ...state, admin_products: newArr };     
    }

    return state;
  }
  