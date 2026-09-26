import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setGenres } from "@/features/redux/genre-slice";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const generalApis = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const token = API_KEY;

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
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
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

    getPopularMovies: builder.mutation({
      query: (payload) => ({
        url: `/movie/popular?page=${payload}`,
        method: "GET",
      }),
    }),

    getNowPlayingMovies: builder.mutation({
      query: (payload) => ({
        url: `/movie/now_playing?language=en-US&page=${payload}`,
        method: "GET",
      }),
    }),

    getMovieDetails: builder.mutation({
      query: (payload) => ({
        url: `/movie/${payload}?append_to_response=recommendations`,
        method: "GET",
      }),
    }),

    getPopularSeries: builder.mutation({
      query: (payload) => ({
        url: `/tv/popular?language=en-US&page=${payload}`,
        method: "GET",
      }),
    }),

    getSeriesDetails: builder.mutation({
      query: (payload) => ({
        url: `/tv/${payload}?language=en-US&append_to_response=recommendations`,
        method: "GET",
      }),
    }),

    searchMovies: builder.mutation({
      query: (payload) => ({
        url: `/search/movie?query=${payload.searchQuery}&page=${payload.currentPage}`,
        method: "GET",
      }),
    }),

    searchSeries: builder.mutation({
      query: (payload) => ({
        url: `/search/tv?include_adult=true&language=en-US&query=${payload.searchQuery}&page=${payload.currentPage}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetGenresMutation,
  useGetMovieThrillersMutation,
  useGetSeriesThrillersMutation,
  useGetPopularMoviesMutation,
  useGetNowPlayingMoviesMutation,
  useGetMovieDetailsMutation,
  useGetPopularSeriesMutation,
  useGetSeriesDetailsMutation,
  useSearchMoviesMutation,
  useSearchSeriesMutation,
} = generalApis;
