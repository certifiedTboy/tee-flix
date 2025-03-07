import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import useGetSeriesRecommendations from "../../hooks/useGetSeriesRecommendations";
import { useGetSeriesThrillersMutation } from "../../lib/apis/generalApis";
import TrailerModal from "../common/TrailerModal";
import InfiniteScroll from "react-infinite-scroll-component";
// import { GoogleLogin } from "@react-oauth/google";
import MovieCard from "../Commons/MovieCard";
import Loader from "../Commons/Loader";

const SeriesDetails = () => {
  const [trailer, setTrailer] = useState("");
  const [open, setOpen] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const [getMovieDetails, movieData] = useGetSingleMovie();

  const [getSeriesThrillers, { data }] = useGetSeriesThrillersMutation();

  const [
    getSeriesRecommendations,
    recommendedData,
    errorMessage,
    isLoading,
    hasMore,
    totalResults,
  ] = useGetSeriesRecommendations();
  const params = useParams();
  const { seriesId } = params;

  useEffect(() => {
    getMovieDetails(
      `${process.env.REACT_APP_API_URL}/tv/${seriesId}?language=en-US`
    );

    getSeriesRecommendations(
      `${process.env.REACT_APP_API_URL}/tv/${seriesId}/recommendations?language=en-US`
    );
  }, [seriesId]);

  const changePageNum = () => {
    if (hasMore) {
      setPageNum(pageNum + 1);
    }
  };

  useEffect(() => {
    getSeriesRecommendations(
      `${process.env.REACT_APP_API_URL}/tv/${seriesId}/recommendations?language=en-US&page=${pageNum}`
    );
  }, [pageNum]);

  useEffect(() => {
    if (movieData) {
      getSeriesThrillers(movieData?.id);
    }
  }, [movieData]);

  useEffect(() => {
    // find main trailler key
    if (data && data?.results?.length > 0) {
      const trailerKey = data?.results.find(
        (result) => result?.type === "Trailer"
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
    <Fragment>
      {open && (
        <TrailerModal
          trailerKey={trailer}
          open={open}
          setOpenModal={() => setOpen(false)}
        />
      )}
      <header className="page-header movie-details-header intro">
        <div className="container">
          {movieData && (
            <div className="movie-details">
              <div className="movie-poster">
                <img
                  src={`${process.env.REACT_APP_IMAGE_PATH}/w300${movieData?.poster_path}`}
                  alt={movieData?.name}
                />
              </div>
              <div className="details-content">
                {movieData?.production_companies && (
                  <h5 className="director">
                    {movieData?.production_companies[0]?.name}
                  </h5>
                )}
                <h2 className="title">{movieData?.name}</h2>
                <div className="banner-meta">
                  <ul>
                    <li className="vid">
                      <span className="type">{movieData?.type}</span>
                      <span className="quality">HD</span>
                    </li>
                    <li className="category">
                      <span>
                        {movieData && movieData.genres
                          ? movieData.genres
                              .map((genre) => genre.name)
                              .join(", ")
                          : null}
                      </span>
                    </li>
                    <li className="time">
                      <span>
                        <i className="ri-calendar-2-line"></i>
                        {movieData?.first_air_date}
                      </span>

                      <span>
                        <i className="ri-time-line"></i>
                        {movieData?.seasons?.length} Seasons
                      </span>

                      <span>
                        <i className="ri-time-line"></i>
                        {movieData?.number_of_episodes} Episodes
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="desc">{movieData?.overview}</p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {" "}
                  <Link
                    className="btn watch-btn"
                    to={`/series/${movieData?.id}/stream`}
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
          Because you are interested in {movieData?.title}
        </p>
      </div>
      <InfiniteScroll
        dataLength={totalResults}
        next={changePageNum}
        hasMore={hasMore}
        loader={<Loader />}
        style={{ overflow: "hidden" }}
        endMessage={""}
      >
        <div className="row movies-grid">
          {recommendedData?.length > 0 &&
            recommendedData.map((movie) => (
              <MovieCard {...movie} key={movie.id} />
            ))}
        </div>
      </InfiniteScroll>
    </Fragment>
  );
};

export default SeriesDetails;
