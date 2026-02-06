import { useState } from "react";
import { useParams } from "react-router-dom";
import "./StreamSeries.css";

const StreamSeries = () => {
  const [episode, setEpisode] = useState(1);
  const [season, setSeason] = useState(1);

  const params = useParams();

  const { seriesId } = params;

  return (
    <div className="stream-container">
      <iframe
        title={`Streaming Series ${seriesId} Season ${season} Episode ${episode}`}
        width="100%"
        height="100%"
        src={`https://vidsrc.pro/embed/tv/${seriesId}/${season}/${episode}`}
      ></iframe>

      <div className="selection">
        <div className="season">
          <label htmlFor="season"> Season:</label>
          <input
            type="number"
            min={1}
            value={season}
            onChange={(event) => setSeason(event.target.value)}
          />
        </div>

        <div className="episode">
          <label htmlFor="episode">Episode:</label>
          <input
            type="number"
            min={1}
            value={episode}
            onChange={(event) => setEpisode(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default StreamSeries;
