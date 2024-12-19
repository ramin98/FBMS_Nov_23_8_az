import { deleteAllProductFetch, deleteProductFetch } from "./adminFetchs";

export let initialObjectAdmin = {
  admin_products: [],
  ids:[]
};

export function reducerAdmin(state, action) {
  if (action.type === "GET PRODUCTS") {
    return { ...state, admin_products: action.payload, ids: action.payload.map((item) => ({id:item.id, checked: false}))  };
  } else if (action.type === "ADD") {
    let newArr = [...state.admin_products];
    newArr.push(action.payload);
    return { ...state, admin_products: newArr };
  } else if (action.type === "EDIT") {
    let newArr = [...state.admin_products];
    let index = newArr.findIndex((item) => item.id === action.payload.id);
    console.log(action.payload);
    newArr[index] = { ...action.payload, url: typeof action.payload.url === 'object' ? newArr[index].url : action.payload.url};
    console.log(newArr[index])
    return { ...state, admin_products: newArr };
  } else if (action.type === "DELETE") {
    let newArr = [...state.admin_products];
    let index = newArr.findIndex((item) => item.id === action.payload);
    deleteProductFetch(action.payload);
    newArr.splice(index, 1);
    return { ...state, admin_products: newArr };
  }
  else if (action.type === "CHOOSE ALL") {
    let deletedObj = [...state.ids]
    let index = deletedObj.findIndex((item) => item.id === action.payload.id);
    deletedObj[index].checked = action.payload.checked
    console.log(deletedObj)
    
    return { ...state, ids: deletedObj };
  }
  else if (action.type === "DELETE ALL") {
    let deletedObj = [...state.ids]
    console.log(deletedObj)
    let filteredArray = deletedObj.filter((item) => item.checked).map((item) => item.id)
    let newArr = [...state.admin_products].filter((item) => !filteredArray.includes(item.id))
    console.log(filteredArray)
    deleteAllProductFetch(filteredArray)
    return { ...state, admin_products: newArr };
  }

  return state;
}
