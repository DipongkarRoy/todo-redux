import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type TTodo = {
  id: string;
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
      state.todos.push({ ...action.payload, iscomplete: false });
    },

    removeTodos: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodos: (state, action: PayloadAction<string>) => {
        const todo = state.todos.find((todo) => todo.id === action.payload)
        todo!.iscomplete =!todo?.iscomplete;
        console.log('before toggle');
    }
  
  },
});

export const { addTodos ,removeTodos ,toggleTodos} = todoSlice.actions;

export default todoSlice.reducer;
