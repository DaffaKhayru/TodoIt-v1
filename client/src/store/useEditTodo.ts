import { create } from "zustand";

interface EditTodoState {
  isEditTodoVisible: boolean,
  toggleEditTodo: () => void,
}

// Zustand store
const useEditTodo = create<EditTodoState>((set) => ({
  isEditTodoVisible: false,
  toggleEditTodo: () => set((state) => ({ isEditTodoVisible: !state.isEditTodoVisible })),
}));

export default useEditTodo;
