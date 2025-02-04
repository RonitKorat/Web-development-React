import { useState } from "react";
import Items from "./Item";

const FoodItems = ({ items }) => {

  let [activeItems,setActiveItems] = useState([]);
  const onBuyButton = (item,event) =>{
    let newItems=[...activeItems,item];
    setActiveItems(newItems);
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item,event)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
