// store/boardSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { ObjectId } from "mongodb";
import { kanbanBoards } from '@/Types/KanbanTypes';

const initialState = {
  activeBoard: <kanbanBoards | null>null,
  boards: <kanbanBoards[] | []>[]
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActiveBoard: (state, action:PayloadAction<kanbanBoards | null>) => {
      state.activeBoard = action.payload;
    },
    setBoards: (state, action:PayloadAction<any>) => {
      state.boards = [...action.payload];
      state.activeBoard = state.boards[0];
    },
    addBoard: (state, action:PayloadAction<kanbanBoards>) => {
      state.boards = [...state.boards, action.payload];
      console.log('test',action.payload)
      state.activeBoard = action.payload;
    },    
    addTask: (state, action: PayloadAction<{ columnId: string; task: any }>) => {
      const { columnId, task } = action.payload;

      const updatedBoardIndex = state.boards.findIndex(board => board._id === state.activeBoard?._id);

      if (updatedBoardIndex !== -1 && state.activeBoard) {
        const updatedColumnIndex = state.activeBoard.columns.findIndex(col => col._id === columnId);
        if (updatedColumnIndex !== -1) {
          state.boards[updatedBoardIndex].columns[updatedColumnIndex].tasks.push(task);
          state.activeBoard = state.boards[updatedBoardIndex];
        }
      }
    },
    addColumn: (state, action) => {
      const {column} = action.payload;
      const updatedBoardIndex = state.boards.findIndex(board => board._id === state.activeBoard?._id);
      if (updatedBoardIndex !== -1) {
        state.boards[updatedBoardIndex].columns.push(column);
        state.activeBoard = state.boards[updatedBoardIndex]
      }
    },
    editBoard: (state, action) => {
      const {board} = action.payload;
      console.log('REDUX', board)
      const updatedBoardIndex = state.boards.findIndex(board => board._id === state.activeBoard?._id);
        console.log('updatedIndex', updatedBoardIndex)
      if (updatedBoardIndex !== -1) {
        state.boards[updatedBoardIndex] = board;
      }
      state.activeBoard = board;
    },
    deleteBoard: (state) => {
      const deleteBoardIndex = state.boards.findIndex(board => board._id === state.activeBoard?._id);
      if (deleteBoardIndex !== -1) {
        state.boards.splice(deleteBoardIndex, 1);
      }
      state.activeBoard = state.boards[0];
    }
  },
});

export const { setActiveBoard, setBoards,addBoard, addTask, addColumn, editBoard, deleteBoard  } = boardSlice.actions;

export default boardSlice.reducer;
