import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { apiSlice } from "../features/api/apiSlice";
import pcbuildReducer from "../features/pcbuild/pcbuildSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pcbuild: pcbuildReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: false });
