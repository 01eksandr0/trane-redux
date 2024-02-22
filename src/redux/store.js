import { taskReducer } from "./tasksSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { tasks: taskReducer },
});
