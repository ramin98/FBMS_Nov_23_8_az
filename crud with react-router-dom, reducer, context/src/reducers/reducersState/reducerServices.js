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

// way with object

// import { services } from "../../assets/data";
// import { DELETE_FROM_SERVICES, EDIT_SERVICES } from './actionType';

// export let initialObjectServices = {
//   services: services,
// };

// let actionHandlers = {
//     [DELETE_FROM_SERVICES]: function (state, action) {
//         const newArr = [...state.services];
//         const elementIndex = newArr.findIndex((item) => item.id === action.payload);

//         if (elementIndex === -1) {
//             console.error(`Service with id ${action.payload} not found.`);
//             return state;
//         }

//         newArr.splice(elementIndex, 1);
//         return { ...state, services: newArr };
//     },
//     [EDIT_SERVICES]: function (state, action) {
//         const newArr = [...state.services];
//         const elementIndex = newArr.findIndex((item) => item.id === action.payload.id);

//         if (elementIndex === -1) {
//             console.error(`Service with id ${action.payload.id} not found.`);
//             return state;
//         }

//         newArr[elementIndex] = {
//             ...newArr[elementIndex],
//             ...action.payload.formData,
//         };

//         return { ...state, services: newArr };
//     },
// };

// export function reducerServices(state, action) {
//     const handler = actionHandlers[action.type];
//     if (!handler) {
//         console.error(`Unhandled action type: ${action.type}`);
//         return state;
//     }

//     return handler(state, action);
// }


// way with IF

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
