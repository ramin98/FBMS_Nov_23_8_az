import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import BagItem from "./BagItem";

function BagList() {
  let { bagState, bagDispatch } = useContext(MyContext);

  useEffect(() => {
    bagDispatch({type:'GET BAG'})
  }, []);

  console.log(bagState)
  return (
    <ul>
      {bagState.bag.map((item) => (
        <BagItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default BagList;
