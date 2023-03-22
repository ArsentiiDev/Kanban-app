// store/boardSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeBoardId: '',
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActiveBoard: (state, action:PayloadAction<string>) => {
      state.activeBoardId = action.payload;
    },
  },
});

export const { setActiveBoard } = boardSlice.actions;

export default boardSlice.reducer;
