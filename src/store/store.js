import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { generalApis } from "../lib/apis/generalApis";
import genreSlice from "../lib/redux/genreSlice";

export const store = configureStore({
  reducer: {
    [generalApis.reducerPath]: generalApis.reducer,
    genreState: genreSlice,
  },

  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalApis.middleware),
});

setupListeners(store.dispatch);
