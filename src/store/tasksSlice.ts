import { tasks } from "@/Types/KanbanTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tasksSlice {
    tasks:tasks[]
}

const initialState:tasks[] = []

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
      setTasks: (state, action) => {
        return action.payload;
      },
      addTask: (state, action: PayloadAction<tasks>) => {
        state.push(action.payload);
      },
    },
  });
  

export const { setTasks, addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
