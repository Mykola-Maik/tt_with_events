import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
