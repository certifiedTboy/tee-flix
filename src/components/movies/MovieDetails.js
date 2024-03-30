import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
// import { GoogleLogin } from "@react-oauth/google";
import MovieCard from "./MovieCard";
import classes from "./MovieDetails.module.css";
const GridStyled = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const ImgStyled = styled("img")({
  width: "100%",
});

const MovieDetails = () => {
  const [getMovieDetails, movieData] = useGetSingleMovie();
  const params = useParams();
  const { movieId } = params;

  useEffect(() => {
    getMovieDetails(
      `${process.env.REACT_APP_API_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=recommendations`
    );
  }, [movieId]);

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60) + "h";
    const minutes = Math.floor(runtime % 60) + "m";

    return `${hours} ${minutes}`;
  };

  // console.log(movieData);

  return (
    <>
      <div className={classes.container}>
        <div
          className={classes.movie_image}
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515),
              url(${process.env.REACT_APP_IMAGE_PATH}/w300${movieData?.poster_path}) center/cover no-repeat`,
          }}
        >
          <div className={classes.play_icon}>
            <Link to={`/movie/${movieData?.id}/stream`}>
              {" "}
              <i class="fa-solid fa-circle-play"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* <GridStyled container={true} spacing={2}>
        <Grid item={true} md={3}>
          {movieData?.poster_path && (
            <ImgStyled
              src={`${process.env.REACT_APP_IMAGE_PATH}/w300${movieData?.poster_path}`}
              alt={movieData?.title}
            />
          )}
        </Grid>
        <Grid item={true} md={9}>
          <Typography component="h1" variant="h3" gutterBottom={true}>
            {movieData?.title}
          </Typography>
          {movieData?.tagline && (
            <>
              <Typography components="h3" variant="h6">
                Tagline:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movieData?.tagline}
              </Typography>
            </>
          )}
          {movieData?.genres && (
            <>
              <Typography components="h3" variant="h6">
                Genres:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movieData?.genres.map((genre) => genre.name).join(", ")}
              </Typography>
            </>
          )}
          {movieData?.production_countries && (
            <>
              <Typography components="h3" variant="h6">
                Country:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movieData?.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </Typography>
            </>
          )}
          {movieData?.runtime && (
            <>
              <Typography components="h3" variant="h6">
                Duration:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {formatRuntime(movieData?.runtime)}
              </Typography>
            </>
          )}
          {movieData?.release_date && (
            <>
              <Typography components="h3" variant="h6">
                Release Date:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {new Date(movieData?.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </>
          )}
          {movieData?.overview && (
            <>
              <Typography components="h3" variant="h6">
                Overview:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movieData?.overview}
              </Typography>

              <div style={{ width: "50%", marginTop: "50px" }}>
                {/* {!user ? (
                  <GoogleLogin onSuccess={successResponse} />
                ) : ( */}
      {/* <Link
                  to={`/movie/${movieData?.id}/stream`}
                  className="btn btn-success"
                >
                  Stream Movie
                </Link> */}
      {/* )} */}
      {/* </div> */}

      {/* // </GridStyled> */}
      {movieData?.recommendations && (
        <>
          <Typography component="h2" variant="h4" gutterBottom={true}>
            Recommended
          </Typography>
          {movieData?.recommendations && (
            <MovieCard movies={movieData?.recommendations?.results} />
          )}
        </>
      )}
    </>
  );
};

export default MovieDetails;
