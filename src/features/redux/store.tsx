import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { generalApis } from "@/features/apis/general-apis";
import genreSlice from "./genre-slice";
import heroMovieSlice from "./genre-slice";

export const store = configureStore({
  reducer: {
    [generalApis.reducerPath]: generalApis.reducer,
    genreState: genreSlice,
    heroMovieState: heroMovieSlice,
  },

  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalApis.middleware),
});

setupListeners(store.dispatch);
