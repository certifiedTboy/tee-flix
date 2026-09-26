import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
};

export const genreSlice = createSlice({
  initialState,
  name: "genreSlice",
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export default genreSlice.reducer;

export const { setGenres } = genreSlice.actions;
