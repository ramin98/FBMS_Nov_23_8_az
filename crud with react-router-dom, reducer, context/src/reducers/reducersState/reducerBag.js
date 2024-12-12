export let initialObjectBag = {
  bag: [],
};

export function reducerBag(state, action) {
  if (action.type === "ADD TO BAG") {
    let newArr = [...state.bag];
    newArr.push(action.payload)
    return { ...state, bag: newArr };
  } 

  return state;
}
