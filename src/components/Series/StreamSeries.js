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
        width="100%"
        height="600px"
        src={`https://vidsrc.pro/embed/tv/wssgsgsgs/${season}/${episode}`}
      ></iframe>

      <div className="selection">
        <div>
          <label htmlFor="season">
            {" "}
            Season
            <input
              type="number"
              min={1}
              value={season}
              onChange={(event) => setSeason(event.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="episode">
            Episode
            <input
              type="number"
              min={1}
              value={episode}
              onChange={(event) => setEpisode(event.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default StreamSeries;
