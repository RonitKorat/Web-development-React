import "./App.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  return (
    <div className="calculator">
      <Display />
      <ButtonsContainer/>
    </div>
  );
}

export default App;
