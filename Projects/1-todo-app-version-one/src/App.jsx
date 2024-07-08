import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import Appname from "./components/Appname";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <Appname></Appname>
      <AddTodo className="items-container" />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
