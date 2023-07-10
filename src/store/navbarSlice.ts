import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isTaskModalOpen: false,
  isHeaderDropdownOpen: false,
  isEditBoardOpen: false,
  isEditModeActive: false,
  isDeleteBoardModalOpen: false,
  isTaskDescriptionModalOpen: false,
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
    },
    toggleDeleteBoardModal: (state) => {
      state.isDeleteBoardModalOpen = !state.isDeleteBoardModalOpen;
    },
    toggleTaskDescriptionModal: (state) => {
      state.isTaskDescriptionModalOpen = !state.isTaskDescriptionModalOpen;
    }
  },
});

export const { toggleTaskModal, toggleHeaderModal, toggleEditBoardModal, setEditBoardMode,toggleDeleteBoardModal, toggleTaskDescriptionModal } = navbarSlice.actions;

export default navbarSlice.reducer;
