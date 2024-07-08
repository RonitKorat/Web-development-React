import { useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`no of updates are ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    console.log(`${todoName} due on: ${dueDate}`);
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameElement}
            // value={todoName}
            placeholder="Enter Todo here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
