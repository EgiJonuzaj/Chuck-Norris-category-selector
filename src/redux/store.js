import { createStore } from "@reduxjs/toolkit";
import { appReducer } from "./app-reducer";

export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSIN__ && window.__REDUX_DEVTOOLS_EXTENSIN__()
);
