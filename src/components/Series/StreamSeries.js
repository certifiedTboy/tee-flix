import { useParams } from "react-router-dom";
import "./StreamSeries.css";

const StreamSeries = () => {
  const params = useParams();

  const { seriesId } = params;

  return (
    <div className="stream-container">
      <iframe
        width="100%"
        height="600px"
        src={`https://vidsrc.pro/embed/tv/${seriesId}/1/1`}
      ></iframe>

      <div className="selection">
        <div>
          <select>
            <option> Seasons </option>
          </select>
        </div>

        <div>
          <select>
            <option> Episode </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StreamSeries;
