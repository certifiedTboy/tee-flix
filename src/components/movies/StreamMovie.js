import { useParams } from "react-router-dom";

const StreaMovie = () => {
  const params = useParams();

  const { movieId } = params;

  return (
    <div className="stream-container">
      {" "}
      <iframe
        width="100%"
        height="600px"
        src={`https://vidsrc.xyz/embed/movie/${movieId}`}
      ></iframe>
    </div>
  );
};

export default StreaMovie;
