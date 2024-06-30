import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";
import { baseAPI } from "./api/api";


export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath] : baseAPI.reducer ,
    todos :todoSlice 
  },
  middleware:getDefaultMiddlewares =>getDefaultMiddlewares().concat(baseAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
