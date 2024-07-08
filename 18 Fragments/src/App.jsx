import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ErrorMessage from "./assets/Components/ErrorMessage";
import FoodItems from "./assets/Components/FoodItems";
import Container from "./assets/Components/Container";
import FoodInput from "./assets/Components/FoodInput";
function App() {
  /* {emptyItem} */

  // let textStateArr=
  // let textToshow=textStateArr[0];
  // let settextState=textStateArr[1];
  let [foodItems, setfoodItems] = useState([]);


  // console.log(`current value of textstate : ${textToshow}`);
  const onKeyDown = (event) => {
    // console.log(event);  
    if(event.key==='Enter')
      {
        let newFoodItem=event.target.value;
        event.target.value='';
        let newItems=[...foodItems,newFoodItem];
        setfoodItems(newItems);
        console.log("Food value Entered is.." + newFoodItem);
        
      }
    // /settextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>Above is the list of Healthy Food that are good for our health</p>
      </Container>
    </>
  );
}
export default App;
