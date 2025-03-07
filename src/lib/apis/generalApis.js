import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setGenres } from "../redux/genreSlice";

const API_KEY = "45fd9e5defbe418bb8b1195402393501";

export const generalApis = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: async (headers, { getState }) => {
      const token = process.env.REACT_APP_API_TOKEN;

      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGenres: builder.mutation({
      query: () => ({
        url: `/genre/movie/list?api_key=${API_KEY}`,
        method: "GET",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setGenres(data?.genres));
        } catch (error) {}
      },
    }),

    getMovieThrillers: builder.mutation({
      query: (movieId) => ({
        url: `/movie/${movieId}/videos`,
        method: "GET",
      }),
    }),

    getSeriesThrillers: builder.mutation({
      query: (seriesId) => ({
        url: `/tv/${seriesId}/videos`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetGenresMutation,
  useGetMovieThrillersMutation,
  useGetSeriesThrillersMutation,
} = generalApis;
