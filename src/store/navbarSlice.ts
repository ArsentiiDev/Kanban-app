// store/boardSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { ObjectId } from "mongodb";
import { kanbanBoards } from '@/Types/KanbanTypes';

const initialState = {
  isTaskModalOpen: false,
  isHeaderDropdownOpen: false,
  isEditBoardOpen: false,
  isEditBoardMode: false
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
    toggleBoardMode: (state) => {
      state.isEditBoardMode = !state.isEditBoardMode
    }
  },
});

export const { toggleTaskModal, toggleHeaderModal, toggleEditBoardModal, toggleBoardMode } = navbarSlice.actions;

export default navbarSlice.reducer;
