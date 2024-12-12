import { services } from "../../assets/data";

export let initialObjectServices = {
  services: services,
};

let reducerServicesObj = {
    'DELETE FROM SERVICES': function (state, action) {
        console.log(state, action)
        let newArr = [...state.services];
        let elementIndex = newArr.findIndex((item) => item.id === action.payload);
        newArr.splice(elementIndex, 1);
        console.log(newArr)
        return { ...state, services: newArr };
    },
    'EDIT SERVICES': function (state, action) {
        console.log(state, action)
        let newArr = [...state.services];
        let elementIndex = newArr.findIndex((item) => item.id ===  action.payload.id);
        newArr[elementIndex].servicesName = action.payload.formData.servicesName;
        newArr[elementIndex].servicesDescription = action.payload.formData.servicesDescription;
        console.log(newArr)
        return { ...state, services: newArr };
    },
}

export function reducerServices(state, action) {
    if(action){
        return reducerServicesObj[action.type](state, action)
    }
  
    return state;
  }
  

// export function reducerServices(state, action) {
//   if (action.type === "DELETE FROM SERVICES") {
//     let newArr = [...state.services];
//     let elementIndex = newArr.findIndex((item) => item.id === action.payload);
//     newArr.splice(elementIndex, 1);
//     return { ...state, services: newArr };
//   } else if (action.type === "EDIT SERVICES") {
//     let newArr = [...state.services];
//     let elementIndex = newArr.findIndex((item) => item.id ===  action.payload.id);
//     newArr[elementIndex].servicesName = action.payload.formData.servicesName;
//     newArr[elementIndex].servicesDescription = action.payload.formData.servicesDescription;
//     return { ...state, services: newArr };
//   }

//   return state;
// }
