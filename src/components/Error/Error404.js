import { Link } from "react-router-dom";
import notFound from "../../Assets/notfound.svg";

const Error404 = () => {
  return (
    <div>
      <div className="notFound">
        <img className="imgNotFound" src={notFound} alt="not found" />
        <h2>Page Not Found</h2>
        <p style={{ color: "#fff" }}>You probably missed you steps</p>
        <Link to="/" className="backToHome">
          You can go back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
