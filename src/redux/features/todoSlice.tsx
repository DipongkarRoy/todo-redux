import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type TTodo = {
  _id: string;
  title: string;
  description: string;
  iscomplete?: boolean;
};
type TTodoState = {
  todos: TTodo[];
};
const initialState: TTodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload });
    },

    removeTodos: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    toggleTodos: (state, action: PayloadAction<string>) => {
        const todo = state.todos.find((todo) => todo._id=== action.payload)
        todo!.iscomplete =!todo?.iscomplete;
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo._id === action.payload)
      todo!.title = action.payload.title;
      todo!.description = action.payload.description;
    },
  },
});

export const { addTodos ,removeTodos ,toggleTodos ,editTodo } = todoSlice.actions;

export default todoSlice.reducer;
