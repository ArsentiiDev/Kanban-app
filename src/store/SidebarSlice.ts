import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarSlice {
  isSidebarVisible: Boolean,
  addBoardModalOpen: Boolean,
}

const initialState:SidebarSlice = {
  isSidebarVisible: true,
  addBoardModalOpen: false,
};

const sidebarSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible
    },
    toggleAddBoardModal: (state) => {
      state.addBoardModalOpen = !state.addBoardModalOpen
    },
  },
});

export const { toggleSidebar, toggleAddBoardModal } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
