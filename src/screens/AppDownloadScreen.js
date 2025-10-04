import { Link } from "react-router-dom";
import android from "../Assets/ios.png";
import ios from "../Assets/apk.png";

const AppDownloadScreen = () => {
  return (
    <section className="app-download-container">
      <div className="intro-container">
        <h1>Download App</h1>
        <p>
          Download the Tee Flix app to enjoy unlimited movies and series on your
          device.
        </p>

        <div className="download-links">
          <Link
            to="https://drive.google.com/uc?id=1Ff8HQLratZV8fVH6IuQ8DDTaOQl3XVOW&export=download"
            download={true}
          >
            <img src={android} alt="android" />
          </Link>
          <Link>
            <img src={ios} alt="ios" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadScreen;
