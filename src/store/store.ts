import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice";
import columnReducer from "./columnSlice";
import navbarReducer from "./navbarSlice";
import sidebarReducer from "./SidebarSlice";

const store = configureStore({
  reducer: {
    board: boardReducer,
    sidebar: sidebarReducer,
    column: columnReducer,
    navbar: navbarReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
