import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { mapGenres } from "../../helpers/helpers";

const IMAGES_PATH = process.env.REACT_APP_IMAGE_PATH;

const ImgStyled = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ImageListItemStyled = styled(ImageListItem)({
  overflow: "hidden",
});

const MovieCard = ({ movies }) => {
  const { genres } = useSelector((state) => state.genreState);

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ImageList cols={matchDownMd ? 1 : 5} rowHeight={365} gap={12}>
      {movies?.map((movie) => (
        <ImageListItemStyled key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            {movie.poster_path && (
              <ImgStyled
                src={`${IMAGES_PATH}/w300${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <ImageListItemBar
              title={movie.title}
              subtitle={<span>{mapGenres(movie.genre_ids, genres)}</span>}
            />
          </Link>
        </ImageListItemStyled>
      ))}
    </ImageList>
  );
};

export default MovieCard;
