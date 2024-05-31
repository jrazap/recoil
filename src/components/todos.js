import { useState } from "react";
import { todoListState } from "../state/atoms/todo-state";
import { totalTodos } from "../state/selectors/total-todos";
import { useRecoilState, useRecoilValue } from "recoil";
import Todo from "./todo";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [inputText, setInputText] = useState("");
  const totalTodoState = useRecoilValue(totalTodos);

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: inputText },
    ]);
    setInputText("");
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <main>
      <div className="container ">
        <input
          type="text"
          className="form-control mb-3"
          id="todoInput"
          value={inputText}
          onChange={handleInputChange}
        />

        <div className="btns d-flex justify-content-center">
          <button
            className="btn bg-black text-white w-25 mx-1"
            onClick={addTodo}
          >
            Add Todo
          </button>
          <button
            className="btn bg-black text-white w-25 mx-1"
            onClick={clearTodos}
          >
            Clear Todos
          </button>
        </div>

        <div className="total d-flex w-100 my-5 ">
          <h3 className="badge bg-black">Total Todos: {totalTodoState}</h3>
        </div>

        <div className="todos w-100">
          {todos.map((todo) => (
            <Todo key={todo.id} text={todo.text} id={todo.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Todos;
