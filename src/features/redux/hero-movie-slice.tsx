import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: {},
};

export const heroMovieSlice = createSlice({
  initialState,
  name: "heroMovieSlice",
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export default heroMovieSlice.reducer;

export const { setMovie } = heroMovieSlice.actions;
