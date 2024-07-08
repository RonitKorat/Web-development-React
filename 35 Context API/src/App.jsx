import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "../store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <Appname />
        <AddTodo className="items-container" />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
