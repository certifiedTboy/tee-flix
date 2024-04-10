import { useParams } from "react-router-dom";
import "./StreamSeries.css";

const StreamSeries = () => {
  const params = useParams();

  const { seriesId } = params;

  return (
    <div className="stream-container">
      <iframe
        width="100%"
        height="100vh"
        src={`https://vidsrc.pro/embed/tv/ssss/1/1`}
      ></iframe>

      <div>
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
