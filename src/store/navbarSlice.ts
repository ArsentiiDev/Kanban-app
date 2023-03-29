// store/boardSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isTaskModalOpen: false,
  isHeaderDropdownOpen: false,
  isEditBoardOpen: false,
  isEditModeActive: false
};

const navbarSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    toggleTaskModal: (state) => {
        state.isTaskModalOpen = !state.isTaskModalOpen;
    },
    toggleHeaderModal: (state) => {
        state.isHeaderDropdownOpen = !state.isHeaderDropdownOpen
    },
    toggleEditBoardModal: (state) => {
      state.isEditBoardOpen = !state.isEditBoardOpen
    },
    setEditBoardMode: (state, action:PayloadAction<boolean>) => {
      state.isEditModeActive = action.payload;
    }
  },
});

export const { toggleTaskModal, toggleHeaderModal, toggleEditBoardModal, setEditBoardMode } = navbarSlice.actions;

export default navbarSlice.reducer;
