import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "By Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "By Oil",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <center class="todo-container">
      <Appname></Appname>
      <AddTodo className="items-container" />
      <TodoItems todoItems={todoItems}/>
    </center>
  );
}

export default App;
