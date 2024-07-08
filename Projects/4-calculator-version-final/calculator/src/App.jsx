import { useState } from "react";
import "./App.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  let [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className="calculator">
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
