// store/boardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeBoardId: 0,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActiveBoard: (state, action) => {
      state.activeBoardId = action.payload;
    },
  },
});

export const { setActiveBoard } = boardSlice.actions;

export default boardSlice.reducer;
