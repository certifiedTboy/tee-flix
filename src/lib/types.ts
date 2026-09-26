export interface Genre {
  id: number;
  name: string;
}

export interface GenreState {
  genreState: {
    genres: Genre[];
  };
}

export interface MovieCardProps {
  poster_path?: string | null;
  title?: string;
  name?: string;
  id: number | string;
  filterCtg?: string;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
}

export interface MovieGenre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path?: string | null;
  origin_country?: string;
}

export interface MovieRecommendation {
  id: number;
  title: string;
  poster_path?: string | null;
  release_date?: string;
  vote_average?: number;
  overview?: string;
}

export interface MovieRecommendations {
  results: MovieRecommendation[];
}

export interface MovieDetailsData {
  id: number;
  title: string;
  poster_path?: string | null;
  production_companies?: ProductionCompany[];
  genres?: MovieGenre[];
  release_date?: string;
  runtime?: number;
  overview?: string;
  recommendations?: MovieRecommendations;
  type?: string;
}

export interface TrailerResult {
  key?: string;
  type?: string;
}
