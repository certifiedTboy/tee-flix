import { useParams } from "react-router-dom";

const StreamSeries = () => {
  const params = useParams();

  const { seriesId } = params;

  return (
    <iframe
      width="100%"
      height="700px"
      src={`https://vidsrc.pro/embed/tv/${seriesId}/1/1`}
    ></iframe>
  );
};

export default StreamSeries;
