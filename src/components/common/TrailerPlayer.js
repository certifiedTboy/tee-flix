import ReactPlayer from "react-player";

const TrailerPlayer = ({ trailerId }) => {
  return <ReactPlayer url={`https://www.youtube.com/watch?v=${trailerId}`} />;
};

export default TrailerPlayer;
