import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { columns } from '@/Types/KanbanTypes';
import { setActiveBoard } from './boardSlice'; 

const initialState = {
  isColumnModalOpen: <boolean>false,
  columns: <columns[] | []>[]
};


const columnSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<columns[] | []>) => {
      state.columns = action.payload;
    },
    toggleAddColumnModal: (state) =>{
        state.isColumnModalOpen = !state.isColumnModalOpen
    }
  },
});

export const { setColumns, toggleAddColumnModal } = columnSlice.actions;

export default columnSlice.reducer;
