import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialStateTasks = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialStateTasks,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask: {
      reducer(state, aciton) {
        const index = state.findIndex((i) => i.id === aciton.payload);
        state.splice(index, 1);
      },
      prepare(id) {
        return { payload: id };
      },
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
