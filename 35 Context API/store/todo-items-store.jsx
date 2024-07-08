import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...currTodoItems,
        {
          name: action.payload.itemName,
          dueDate: action.payload.itemDueDate,
        },
      ];
    case "DELETE_ITEM":
      return currTodoItems.filter(
        (item) => item.name !== action.payload.itemName
      );
    default:
      return currTodoItems;
  }
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatchTodoItems({
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    });
  };

  const deleteItem = (itemName) => {
    dispatchTodoItems({
      type: "DELETE_ITEM",
      payload: { itemName },
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
