import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarSlice {
  isVisible: Boolean,
  addBoardModalOpen: Boolean,
}

const initialState:SidebarSlice = {
  isVisible: true,
  addBoardModalOpen: false,
};

const sidebarSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    toggleVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
    toggleAddModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.addBoardModalOpen = action.payload;
    },
  },
});

export const { toggleVisibility, toggleAddModalVisibility } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
