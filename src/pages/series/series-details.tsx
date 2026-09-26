import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useGetSeriesThrillersMutation,
  useGetSeriesDetailsMutation,
} from "@/features/apis/general-apis";
import TrailerModal from "@/components/common/trailer-modal";
import MovieCard from "@/pages/movies/movie-card";

import type { Genre, MovieCardProps, TrailerResult } from "@/lib/types";

const SeriesDetails = () => {
  const [trailer, setTrailer] = useState("");
  const [open, setOpen] = useState(false);

  const [getSeriesDetails, { data: seriesData }] =
    useGetSeriesDetailsMutation();
  const [getSeriesThrillers, { data }] = useGetSeriesThrillersMutation();

  const params = useParams();
  const { seriesId } = params;

  useEffect(() => {
    if (seriesId) {
      getSeriesDetails(seriesId);
    }
  }, [seriesId]);

  console.log(seriesData);

  useEffect(() => {
    if (seriesData) {
      getSeriesThrillers(seriesData?.id);
    }
  }, [seriesData]);

  useEffect(() => {
    // find main trailler key
    if (data && data?.results?.length > 0) {
      const trailerKey = data?.results.find(
        (result: TrailerResult) => result?.type === "Trailer",
      )?.key;
      // const keys = data?.results.map((result) => result?.key);

      if (trailerKey) {
        return setTrailer(trailerKey);
      }

      // if ((keys && keys.length > 0) || trailerKey) {
      //   // setPlayList([trailerKey, ...keys]);
      // }
    }
  }, [data]);

  return (
    <>
      {open && (
        <TrailerModal
          trailerKey={trailer}
          open={open}
          setOpenModal={() => setOpen(false)}
        />
      )}
      <header className="page-header movie-details-header intro">
        <div className="container">
          {seriesData && (
            <div className="movie-details">
              <div className="movie-poster">
                <img
                  src={`${import.meta.env.VITE_APP_API_IMAGE_URL}/${seriesData?.poster_path}`}
                  alt={seriesData?.name}
                />
              </div>
              <div className="details-content">
                {seriesData?.production_companies && (
                  <h5 className="director">
                    {seriesData?.production_companies[0]?.name}
                  </h5>
                )}
                <h2 className="title">{seriesData?.name}</h2>
                <div className="banner-meta">
                  <ul>
                    <li className="vid">
                      <span className="type">{seriesData?.type}</span>
                      <span className="quality">HD</span>
                    </li>
                    <li className="category">
                      <span>
                        {seriesData && seriesData.genres
                          ? seriesData.genres
                              .map((genre: Genre) => genre.name)
                              .join(", ")
                          : null}
                      </span>
                    </li>
                    <li className="time">
                      <span>
                        <i className="ri-calendar-2-line"></i>
                        {seriesData?.first_air_date}
                      </span>

                      <span>
                        <i className="ri-time-line"></i>
                        {seriesData?.seasons?.length} Seasons
                      </span>

                      <span>
                        <i className="ri-time-line"></i>
                        {seriesData?.number_of_episodes} Episodes
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="desc">{seriesData?.overview}</p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {" "}
                  <Link
                    className="btn watch-btn"
                    to={`/series/${seriesData?.id}/${seriesData?.name}/stream`}
                  >
                    <i className="ri-play-fill"></i>
                    Watch Now
                  </Link>
                  <Link
                    className="btn watch-btn"
                    to="#"
                    onClick={() => setOpen(true)}
                  >
                    <i className="ri-play-fill"></i>
                    Watch Trailer
                  </Link>{" "}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#fff" }}>Recommended Movies</h1>
        <p style={{ color: "#e4d804" }}>
          Because you are interested in {seriesData?.title}
        </p>
      </div>

      <div className="row movies-grid">
        {seriesData &&
          seriesData.recommendations &&
          seriesData?.recommendations?.results &&
          seriesData?.recommendations?.results?.length > 0 &&
          seriesData?.recommendations?.results.map((movie: MovieCardProps) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default SeriesDetails;
