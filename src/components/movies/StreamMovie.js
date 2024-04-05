import { useParams } from "react-router-dom";

const StreaMovie = () => {
  const params = useParams();

  const { movieId } = params;

  return (
    <iframe
      width="100%"
      height="700px"
      src={`https://vidsrc.xyz/embed/movie/${movieId}`}
    ></iframe>
  );
};

export default StreaMovie;
