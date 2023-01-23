import { configureStore } from "@reduxjs/toolkit";
import vocabReducer from "./vocabSlice";

const store = configureStore({ reducer: { vocab: vocabReducer } });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
