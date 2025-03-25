import { create } from "zustand";

interface AddTodoState {
  isAddTodoVisible: boolean,
  toggleAddTodo: () => void,
}

// Zustand store
const useAddTodo = create<AddTodoState>((set) => ({
  isAddTodoVisible: false,
  toggleAddTodo: () => set((state) => ({ isAddTodoVisible: !state.isAddTodoVisible })),
}));

export default useAddTodo;
