import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice";
import sidebarReducer from "./SidebarSlice";

const store = configureStore({
  reducer: {
    board: boardReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
