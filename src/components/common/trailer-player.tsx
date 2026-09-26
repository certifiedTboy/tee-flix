import ReactPlayer from "react-player";

const TrailerPlayer = ({ trailerId }: { trailerId: string }) => {
  return (
    <ReactPlayer
      src={`https://www.youtube.com/watch?v=${trailerId}`}
      width="100%"
      height="100%"
      controls
    />
  );
};

export default TrailerPlayer;
