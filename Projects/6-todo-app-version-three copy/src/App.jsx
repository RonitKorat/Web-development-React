import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const intialtodoItems = [];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added ${itemName} Date:${itemDueDate}`);
    // let newtodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    // setTodoItems(newtodoItems);

    setTodoItems ((currentValue) => [
      ...currentValue,
      { name: itemName, itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <Appname></Appname>
      <AddTodo className="items-container" onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
