import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: true,
  addBoardModalOpen: false,
};

const sidebarSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    toggleVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
    toggleAddModalVisibility: (state, action) => {
      state.addBoardModalOpen = action.payload;
    },
  },
});

export const { toggleVisibility, toggleAddModalVisibility } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
