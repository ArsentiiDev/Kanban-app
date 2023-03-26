// store/boardSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { ObjectId } from "mongodb";
import { kanbanBoards } from '@/Types/KanbanTypes';

const initialState = {
  activeBoard: <kanbanBoards | null>null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActiveBoard: (state, action:PayloadAction<kanbanBoards | null>) => {
      state.activeBoard = action.payload;
    },
  },
});

export const { setActiveBoard } = boardSlice.actions;

export default boardSlice.reducer;
