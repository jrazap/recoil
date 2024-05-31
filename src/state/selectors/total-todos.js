import { selector } from "recoil";
import { todoListState } from "../atoms/todo-state";

export const totalTodos = selector({
  key: "totalTodos",
  get: ({ get }) => {
    const todos = get(todoListState);
    return todos.length;
  },
});
