// store/boardSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { ObjectId } from "mongodb";
import { kanbanBoards } from '@/Types/KanbanTypes';

const initialState = {
  isTaskModalOpen: false,
  isHeaderDropdownOpen: false,
  isEditBoardOpen: false,
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
    }
  },
});

export const { toggleTaskModal, toggleHeaderModal } = navbarSlice.actions;

export default navbarSlice.reducer;
