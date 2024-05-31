import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/atoms/todo-state";

const Todo = ({ text, id }) => {
  const setTodos = useSetRecoilState(todoListState);

  const deletaTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo d-flex align-items-center justify-content-between my-3 w-100 p-2 bg-dark-subtle ">
      <p className="p-0 m-0 fw-bold text-capitalize">{text}</p>
      <button className="btn bg-black text-danger fw-bolder" onClick={deletaTodo}>
        X
      </button>
    </div>
  );
};

export default Todo;
